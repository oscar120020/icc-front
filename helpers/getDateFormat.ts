

 const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
    ];

export function getDateFormat(date: string) {
    const year = new Date(date).getFullYear()
    const monthIndex = new Date(date).getMonth()
    return `${monthNames[monthIndex]}, ${year}`
}