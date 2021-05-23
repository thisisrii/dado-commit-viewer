export function dateFormat(date) {
    const newDate = new Date(date);
    return `${newDate.getHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')} ${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
}