import React from 'react'
import cx from 'classnames'
import { onChangeType } from '../hooks'
import { colorObject } from '../constants'
import { CheckIcon } from '@/assets'

import styles from './radio-group.module.scss'

export const RadioGroup = ({
  options,
  value,
  onChange
}: {
  options: readonly string[]
  value: string
  onChange: onChangeType
}) => (
  <div className={styles['radio-group-container']}>
    <div className={styles['radio-group']}>
      {options.map((option) => (
        <div className={cx(styles['radio-container'])}>
          <input
            className={cx(styles.radio)}
            key={option}
            type="checkbox"
            checked={option === value}
            value={option}
            onChange={onChange}
            style={{ backgroundColor: colorObject[option] }}
          />
          <CheckIcon
            className={cx(styles['radio-checked'], {
              [styles['radio-checked-visible']]: option === value
            })}
          />
        </div>
      ))}
    </div>
  </div>
)
