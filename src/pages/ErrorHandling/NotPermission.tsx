import ErrorHandling from '.'

const NotPermission = () => {
  return (
    <ErrorHandling>
      <h1> 카드를 보낼 수 있는 시간이 지났어요. </h1>
      <p> :( 403 Forbidden</p>
    </ErrorHandling>
  )
}

export default NotPermission
