import { MouseEventHandler, ReactNode } from 'react'
import styles from './modalItem.module.scss'
import cx from 'classnames'

interface Props {
  type: 'button' | 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  size?: 'normal' | 'small';
  color?: 'primary' | 'secondary';
}

const ModalButton = ({type, onClick, children, size='normal', color='primary'}: Props) => {

  return (
    <button type={type} className={cx(styles.modalButton, styles[size], styles[color])} onClick={onClick}>
      {children}
    </button>
  )
}

export default ModalButton