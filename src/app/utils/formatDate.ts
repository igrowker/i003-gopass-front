export const formatDate = (dateString: Date) => {
  return new Intl.DateTimeFormat([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(dateString))
}
