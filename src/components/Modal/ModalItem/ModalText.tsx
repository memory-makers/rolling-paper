<<<<<<< HEAD
import { memo, ReactNode } from 'react'
import styles from './modalItem.module.scss'

interface Props {
  type: 'title' | 'label'
  children: ReactNode
}

const ModalText = memo(({ type, children }: Props) => {
  const text = {
    title: <h2 className={styles.modalTitle}>{children}</h2>,
    label: <label className={styles.modalLabel}>{children}</label>
  }[type]

  return <>{text}</>
})
=======
import { ReactNode } from 'react'
import styles from './modalItem.module.scss'

interface Props {
  type: 'title' | 'label';
  children: ReactNode;
}

const ModalText = ({type, children}: Props) => {
  const text = {
    'title' : <h2 className={styles.modalTitle}>{children}</h2>, 
    'label' : <label className={styles.modalLabel}>{children}</label>
  }[type];

  return (
    <>{text}</>
  )
}
>>>>>>> 789963b83a17581192beb67967c0da3025bf962d

export default ModalText
