import { ChangeEventHandler } from 'react'
import styles from './modalItem.module.scss'

interface Props {
  type: 'text' | 'date'
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  readOnly?: boolean;
}

const ModalInput = ({type, name, onChange, value, readOnly}: Props) => {
  return (
    <input type={type} className={styles.modalInput} name={name} 
      onChange={onChange} value={value} readOnly={readOnly}/>
  )
}

export default ModalInput
