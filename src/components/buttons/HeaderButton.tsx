import React, { ReactNode } from 'react'

interface HeaderButtonProps {
  handleClick: () => void
  icon: ReactNode
}

const HeaderButton = ({ handleClick, icon }: HeaderButtonProps) => {
  return (
    <button className="primary_btn" onClick={handleClick}>
      {icon}
    </button>
  )
}

export default HeaderButton
