import { ChangeEventHandler } from 'react'
<<<<<<< HEAD
import cx from 'classnames'
=======
>>>>>>> 789963b83a17581192beb67967c0da3025bf962d
import styles from './modalItem.module.scss'

interface Props {
  type: 'text' | 'date'
<<<<<<< HEAD
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  readOnly?: boolean
  isAddIcon?: boolean
}

const ModalInput = ({ type, name, onChange, value, readOnly, isAddIcon }: Props) => {
  return (
    <input
      type={type}
      className={cx(styles.modalInput, { [styles.isAddIcon]: isAddIcon })}
      name={name}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
    />
=======
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  readOnly?: boolean;
}

const ModalInput = ({type, name, onChange, value, readOnly}: Props) => {
  return (
    <input type={type} className={styles.modalInput} name={name} 
      onChange={onChange} value={value} readOnly={readOnly}/>
>>>>>>> 789963b83a17581192beb67967c0da3025bf962d
  )
}

export default ModalInput
