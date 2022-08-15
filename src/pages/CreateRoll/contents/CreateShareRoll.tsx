import styles from './createShareRoll.module.scss'

import { ModalButton, ModalInput, ModalText } from '@/components/Modal/ModalItem'

import { ReactComponent as ClipboardIcon } from '@/assets/Text-files.svg'
import { ReactComponent as ShareIcon } from '@/assets/share.svg'

interface Props {
  paperUrl: string
}

const CreateShareRoll = ({ paperUrl }: Props) => {
  const shareData = {
    title: `홍길동님의 롤링페이퍼`,
    text: `홍길동님에게 롤링페이퍼를 써보아요!`,
    url: paperUrl
  }

  const handleClipboardCopyClick = () => {
    navigator.clipboard.writeText(paperUrl)
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(paperUrl)
    navigator.share(shareData)
  }

  return (
    <>
      <ModalText type="title">
        롤링 페이퍼를 만들었어요! <br /> 이제 친구들에게 써달라고 <br /> 말해볼까요?
      </ModalText>

      <ModalText type="label">롤링페이퍼 링크</ModalText>
      <div className={styles.inputWrapper}>
        <ModalInput type="text" name="title" value={paperUrl} readOnly isAddIcon />
        <button type="button" className={styles.iconButton} onClick={handleClipboardCopyClick}>
          <ClipboardIcon />
        </button>
      </div>

      <ModalButton type="button" onClick={handleShareClick}>
        <span>공유하기</span>
        <ShareIcon />
      </ModalButton>
    </>
  )
}

export default CreateShareRoll
