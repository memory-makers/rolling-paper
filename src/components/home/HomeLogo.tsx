import {
  LogoLeftIcon,
  LogoPlaneIcon,
  LogoRightIcon,
  LogoTextIcon,
  PaperAirplaneIcon
} from '@/assets'
import React, { Ref } from 'react'

const HomeLogo = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="logo-container">
      <div className="icon-container">
        <LogoLeftIcon className="plane-left" />
        <LogoPlaneIcon className="plane" />
        <LogoRightIcon className="plane-right" />
      </div>
      <LogoTextIcon className="text" />
    </div>
  )
})

export default HomeLogo
