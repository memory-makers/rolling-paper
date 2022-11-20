import moment from 'moment'

export function dateDiffFormat(dueDate: Date) {
  const due = new Date(dueDate)
  const current = new Date()
  const beforeOpen = due.getTime() > current.getTime()
  // const diff = moment.duration(moment(due).diff(moment(current)))
  let diff = moment.duration(moment(due).diff(moment(current))).asMinutes()
  const day = Math.floor(diff / 24 / 60)
  diff = diff - day * 60 * 24
  const hour = Math.floor(diff / 60)
  diff = diff - hour * 60
  const min = Math.ceil(diff)
  let untilOpen = `${day}일 ${hour}시간 ${min} 분`
  return { untilOpen, beforeOpen }
}
