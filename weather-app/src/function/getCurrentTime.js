export function getCurrentTime() {
    const date = new Date(Date.now());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours + ":" + ((minutes < 10) ? "0" + minutes : minutes)
}