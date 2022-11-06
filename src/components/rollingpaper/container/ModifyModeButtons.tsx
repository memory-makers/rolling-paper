import React from 'react'
import HeaderButton from '../../buttons/HeaderButton'
interface ButtonsProps {
  handleModifyMode: () => void
  handleModifyDone: () => void
}

const ModifyModeButtons = ({ handleModifyMode, handleModifyDone }: ButtonsProps) => {
  return (
    <div className="rollingpaper-buttons">
      <HeaderButton handleClick={handleModifyMode} icon={<span>취소</span>} />
      <HeaderButton handleClick={handleModifyDone} icon={<span>완료</span>} />
    </div>
  )
}

export default ModifyModeButtons
