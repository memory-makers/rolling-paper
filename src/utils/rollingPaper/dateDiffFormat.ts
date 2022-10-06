import moment from 'moment'

export function dateDiffFormat(dueDate: Date) {
  const due = new Date(dueDate)
  const current = new Date()
  const beforeOpen = due.getTime() > current.getTime()
  const diff = moment.duration(moment(due).diff(moment(current)))
  console.log(new Date(dueDate), new Date(), diff)
  let untilOpen = `${diff.days()}일 ${diff.hours()}시간 ${diff.minutes()} 분`
  return { untilOpen, beforeOpen }
}
