import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import GA4React from 'ga-4-react'

import { getGaKey } from '@/utils/common/url'

export interface GAProps {
  action: string
  data?: { [key: string]: unknown }
}

export const useGA = () => {
  const navigate = useNavigate()
  const ga4react = useRef<GA4React>()

  const initializeGA = useCallback((): void => {
    ga4react.current = new GA4React(getGaKey(), {}, [], 5000)
    ga4react.current
      .initialize()
      .then(() => null)
      .catch(() => null)
  }, [])

  const gaEvent = useCallback(
    debounce(({ action, data }: GAProps): void => {
      if (window.gtag)
        window.gtag('event', action, {
          ...(data || {})
        })
    }, 300),
    []
  )

  const gaNavigate = useCallback(
    (to: string, props: GAProps): void => {
      gaEvent(props)
      navigate(to)
    },
    [gaEvent, navigate]
  )

  const gaPV = useCallback((pagePath: string): void => {
    if (window.gtag)
      window.gtag('event', 'page_view', {
        page_path: pagePath
      })
  }, [])

  return {
    initializeGA,
    gaEvent,
    gaNavigate,
    gaPV
  }
}
