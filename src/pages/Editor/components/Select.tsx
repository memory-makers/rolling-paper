import React, { useCallback, useRef, useState } from 'react'
import cx from 'classnames'
import { ArrowDownIcon, ArrowUpIcon } from '@/assets'
import { useOutsideClick } from '../hooks'
import { fontObject, FONT_STYLE_OPTION_TITLE } from '../constants'

import styles from './select.module.scss'

export const Select = ({
  options = [],
  value,
  onChange
}: {
  options: readonly string[]
  value: string
  onChange: any
}) => {
  const selectRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleCloseSelectDropdown = useCallback(() => {
    setOpen(false)
  }, [])
  const handleToggleSelectDropdown = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  useOutsideClick(selectRef, handleCloseSelectDropdown)

  const handleSelectItem = useCallback(
    (_value: string) => {
      onChange(_value)
      handleCloseSelectDropdown()
    },
    [onChange, handleCloseSelectDropdown]
  )

  return (
    <div
      ref={selectRef}
      className={cx(styles['select-container'], {
        [styles['select-container-open']]: open
      })}
    >
      <div
        className={styles['select-selector']}
        style={{ fontFamily: fontObject[value] }}
        onClick={handleToggleSelectDropdown}
      >
        {FONT_STYLE_OPTION_TITLE[value]}
      </div>
      <div className={styles['select-arrow']}>
        {open && <ArrowUpIcon />}
        {!open && <ArrowDownIcon />}
      </div>
      {open && (
        <div className={styles['select-dropdown']}>
          <ul className={styles['select-dropdown-list']}>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelectItem(option)}
                className={cx(styles['select-dropdown-option'], {
                  [styles['select-dropdown-option-checked']]: option === value
                })}
                style={{ fontFamily: fontObject[option] }}
              >
                {FONT_STYLE_OPTION_TITLE[option]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
