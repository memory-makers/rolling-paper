import ErrorHandling from '.'

const NotLogin = () => {
  return (
    <ErrorHandling>
      <h1> 로그인이 필요한 페이지입니다 </h1>
      <p>:( 401 Unauthorized</p>
    </ErrorHandling>
  )
}

export default NotLogin
