import ErrorHandling from '.'

const NotFound = () => {
  return (
    <ErrorHandling>
      <h1> 해당 페이지를 찾을 수 없습니다 </h1>
      <p> :( 404 not found</p>
    </ErrorHandling>
  )
}

export default NotFound
