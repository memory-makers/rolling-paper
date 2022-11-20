import moment from 'moment'

export function dateDiffFormat(dueDate: Date) {
  const due = moment(new Date(dueDate)).subtract(9, 'hours')
  const current = moment(new Date())
  const beforeOpen = current.isBefore(dueDate)
  let diff = moment.duration(due.diff(current)).asMinutes()
  const day = Math.floor(diff / 24 / 60)
  diff = diff - day * 60 * 24
  const hour = Math.floor(diff / 60)
  diff = diff - hour * 60
  const min = Math.ceil(diff)
  let untilOpen = `${day}일 ${hour}시간 ${min}분`
  return { untilOpen, beforeOpen }
}
