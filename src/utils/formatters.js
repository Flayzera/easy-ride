export default function formatDateTime (sdate) {
  // AAAA-MM-DDTHH:MM => MM/AA HHh
  const date = new Date(sdate)
  return `${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}
