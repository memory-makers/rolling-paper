import { LogoIcon } from '@/assets'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import styles from './button.module.scss'

const HomeButton = ({}) => {
  const navigate = useNavigate()
  return <LogoIcon className={styles['home-btn']} onClick={() => navigate('/')} />
}

export default HomeButton
