import { useMemo } from 'react'
import { useDetectAdBlock } from 'adblock-detect-react'

import Ads from '@/pages/Ads'

export const useAdBlockDetect = () => {
  const adBlockDetected = useDetectAdBlock()

  const adComponent = useMemo(() => {
    if (adBlockDetected) {
      window.alert('ad block detected')
      return ''
    }
    return <Ads />
  }, [])

  return <div>{adComponent}</div>
}
