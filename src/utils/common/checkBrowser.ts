export function checkBrowser() {
  let agent = window.navigator.userAgent.toLowerCase()
  if (
    agent.indexOf('mise') != -1 ||
    (agent.indexOf('safari') > -1 && agent.indexOf('chrome') == -1)
  ) {
    console.log(agent)
    return true
  }
  return false
}
