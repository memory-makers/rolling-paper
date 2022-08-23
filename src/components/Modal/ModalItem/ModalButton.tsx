import { MouseEventHandler, ReactNode } from 'react'
<<<<<<< HEAD
import cx from 'classnames'
import styles from './modalItem.module.scss'

interface Props {
  type: 'button' | 'submit'
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  size?: 'normal' | 'small'
  color?: 'primary' | 'secondary'
}

const ModalButton = ({ type, onClick, children, size = 'normal', color = 'primary' }: Props) => {
  return (
    <button
      type={type}
      className={cx(styles.modalButton, styles[size], styles[color])}
      onClick={onClick}
    >
=======
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
>>>>>>> 789963b83a17581192beb67967c0da3025bf962d
      {children}
    </button>
  )
}

<<<<<<< HEAD
export default ModalButton
=======
export default ModalButton
>>>>>>> 789963b83a17581192beb67967c0da3025bf962d
