const monthStr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

export function getStartOfToday() {
  return getStartOfDayFromDate(Date.now())
}

export function getEndOfToday() {
  return getEndOfDayFromDate(Date.now())
}

export function getStartOfDayFromDate(date) {
  const res = new Date(date)
  res.setHours(0, 0, 0, 0)
  return res.getTime()
}

export function getEndOfDayFromDate(date) {
  const res = new Date(date)
  res.setHours(23, 59, 59, 999)
  return res.getTime()
}

export function epochDays(dayCount) {
  return 24 * 60 * 60 * 1000 * dayCount
}

export function getShortDateString(dateEpoch) {
  const dateObj = new Date(dateEpoch)
  return `${dateObj.getDate()} ${monthStr[dateObj.getMonth()]}`
}
