import { onChangeType } from '../hooks'
import styles from './backgroundOption.module.scss'

export const BackgroundOption = ({
  value,
  onChange,
  checked
}: {
  value: string
  onChange: onChangeType
  checked: boolean
}) => {
  return (
    <label className={styles['background-option']}>
      <input
        type="radio"
        value={value}
        name="background-option"
        onChange={onChange}
        checked={checked}
      />
      <span style={{ backgroundColor: value }} />
    </label>
  )
}
