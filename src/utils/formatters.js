export default function formatDateTime (sdate) {
  // AAAA-MM-DDTHH:MM => MM/AA HHh
  const date = new Date(sdate)
  return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${date.getMinutes()}`
}

export function newFormatDateTime (sdate) {
  const date = new Date(sdate)
  return `${date.getDate()}/${date.getMonth() + 1}`
}

export function newFormatTime (sdate) {
  const hour = new Date(sdate)
  return `${hour.getHours()}`
}
