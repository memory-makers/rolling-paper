import { useState } from 'react'
import styles from './myPageDropdown.module.scss'
import cx from 'classnames'

import ShareRoll from '@/pages/ShareRoll'
import EditRoll from '@/pages/ChangeRoll/EditRoll'
import DeleteRoll from '@/pages/ChangeRoll/DeleteRoll'
import PaperType from '@/utils/rollingPaper/Paper.type'
import { useUrlName } from '@/store/urlNickname'
import { hostname } from 'os'
import { useName } from '@/store/nickname'

interface Props {
  paper: PaperType
  isDropdown: boolean
}

const MyPageDropDown = ({ paper, isDropdown }: Props) => {
  const [isShareRollModalOpen, setIsShareRollModalOpen] = useState(false)
  const [isEditRollModalOpen, setIsEditRollModalOpen] = useState(false)
  const [isDeleteRollModalOpen, setIsDeleteRollModalOpen] = useState(false)
  const { state: urlNameState, dispatch: urlNameDispatch } = useUrlName()
  const { state: nickname } = useName()
  const handleClickShare = () => {
    urlNameDispatch({
      type: 'LOAD_URL_NAME',
      payload: {
        paperId: paper.paperId,
        paperUrl: paper.paperUrl,
        hostName: nickname
      }
    })
    setIsShareRollModalOpen((prev) => !prev)
  }
  const handleClickEdit = () => {
    setIsEditRollModalOpen((prev) => !prev)
  }

  const handleClickDelete = () => {
    setIsDeleteRollModalOpen((prev) => !prev)
  }

  return (
    <section className={cx(styles.dropdown, { [styles.isActive]: isDropdown })}>
      <button type="button" onClick={handleClickShare}>
        공유 하기
      </button>
      <button type="button" onClick={handleClickEdit}>
        수정 하기
      </button>
      <button type="button" onClick={handleClickDelete}>
        삭제 하기
      </button>
      {isEditRollModalOpen && (
        <EditRoll
          paperId={paper.paperId}
          ePaperTitle={paper.paperTitle}
          eDueDate={paper.dueDate}
          eTheme={paper.theme}
          paperUrl={paper.paperUrl}
          setIsModalOpen={setIsEditRollModalOpen}
        />
      )}
      {isDeleteRollModalOpen && (
        <DeleteRoll paperId={paper.paperId} setIsModalOpen={setIsDeleteRollModalOpen} />
      )}

      {isShareRollModalOpen && (
        <ShareRoll setIsModalOpen={setIsShareRollModalOpen}>
          롤링페이퍼를 친구들에게 <br /> 작성해달라고 공유해볼까요?
        </ShareRoll>
      )}
    </section>
  )
}

export default MyPageDropDown
