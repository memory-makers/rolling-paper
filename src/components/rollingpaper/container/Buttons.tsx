import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderButton from '../../buttons/HeaderButton'
import ShareRoll from '@/pages/ShareRoll'
import { ReactComponent as StickerIcon } from '@/assets/sticker-icn.svg'
import { ReactComponent as ShareIcon } from '@/assets/share-icn.svg'

interface ButtonsProps {
  handleModifyMode: () => void
  beforeOpen: boolean
}

const kakao = (window as any).kakao

const Buttons = ({ beforeOpen, handleModifyMode }: ButtonsProps) => {
  const { rollingPaperId } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickButton = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [isModalOpen])

  return (
    <div className="rollingpaper-buttons">
      {beforeOpen && <HeaderButton handleClick={handleModifyMode} icon={<StickerIcon />} />}
      <HeaderButton handleClick={handleClickButton} icon={<ShareIcon />} />
      {isModalOpen && (
        <ShareRoll paperUrl={rollingPaperId} setIsModalOpen={setIsModalOpen}>
          다른 친구들도 롤링페이퍼를 <br /> 써보라고 공유해줄까요?
        </ShareRoll>
      )}
    </div>
  )
}

export default Buttons
