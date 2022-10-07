import { ChangeEventHandler } from 'react'
import cx from 'classnames'
import styles from './modalInput.module.scss'

interface Props {
  type: 'text' | 'date'
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  min?: string
  maxLength?: number
  placeholder?: string
  readOnly?: boolean
  isAddIcon?: boolean
}

const ModalInput = ({
  type,
  name,
  onChange,
  value,
  min,
  maxLength,
  placeholder,
  readOnly,
  isAddIcon
}: Props) => {
  return (
    <input
      type={type}
      className={cx(styles.modalInput, { [styles.isAddIcon]: isAddIcon })}
      name={name}
      onChange={onChange}
      value={value}
      min={min}
      maxLength={maxLength}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  )
}

export default ModalInput
