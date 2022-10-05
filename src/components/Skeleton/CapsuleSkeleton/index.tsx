import styles from './capsuleSkeleton.module.scss'

const CapsuleSkeleton = () => {
  return (
    <div className={styles.myPageMainContent}>
      <div className={styles.roll}>
        <div className={styles.paperInfoWrap}>
          <div className={styles.textArea} />
        </div>
        <div className={styles.openDateWrap}>
          <button type="button">{/* <ArrowDownIcon /> */}</button>
        </div>
      </div>
    </div>
  )
}

export default CapsuleSkeleton
