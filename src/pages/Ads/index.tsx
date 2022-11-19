import { memo, useEffect, useRef } from 'react'

const Ads = () => {
  const adRef = useRef<boolean>(false)

  const adFunction = (ins: HTMLModElement, script: HTMLScriptElement) => {
    document.querySelector('.aside__kakaoAdFit')?.appendChild(ins)
    document.querySelector('.aside__kakaoAdFit')?.appendChild(script)
    return null
  }

  useEffect(() => {
    if (adRef.current) {
      return
    }

    if (!import.meta.env.VITE_KAKAO_ADFIT) {
      const noAds = document.createElement('noAds')
      noAds.style.display = 'inline-block'
      noAds.style.width = '100%'
      noAds.style.height = '50px'
      noAds.style.backgroundColor = '#DBDBDB'
      document.querySelector('.aside__kakaoAdFit')?.appendChild(noAds)
      return
    }

    const ins = document.createElement('ins')
    const script = document.createElement('script')

    ins.className = 'kakao_ad_area'
    ins.style.display = 'none;'

    ins.setAttribute('data-ad-width', '320')
    ins.setAttribute('data-ad-height', '50')
    ins.setAttribute('data-ad-unit', import.meta.env.VITE_KAKAO_ADFIT)

    script.async = true
    script.type = 'text/javascript'
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js'
    script.onload = adFunction(ins, script)

    adRef.current = true
  }, [])

  return (
    <>
      <aside className="aside__kakaoAdFit"></aside>
    </>
  )
}

export default memo(Ads)
