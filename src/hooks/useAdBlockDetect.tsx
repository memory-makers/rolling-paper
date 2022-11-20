import { useEffect, useMemo, useState } from 'react'
import { useDetectAdBlock } from 'adblock-detect-react'
import axios from 'axios'

import KakaoFit from '@/pages/KakaoFit'

export const useAdBlockDetect = () => {
  const [isBlocked, setIsBlocked] = useState(false)
  const adBlockDetected = useDetectAdBlock()

  useEffect(() => {
    axios
      .request({
        url: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`
      })
      .then(() => {
        setIsBlocked(false)
      })
      .catch(() => {
        setIsBlocked(true)
      })
  }, [])

  const adComponent = useMemo(() => {
    if (adBlockDetected || isBlocked) {
      window.alert('애드블록을 해제하면 더 원활하게 롤링페이퍼를 사용할 수 있어요!')
      return ''
    }
    return <KakaoFit />
  }, [])

  return <div>{adComponent}</div>
}
