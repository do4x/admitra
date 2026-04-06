export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function addDays(isoDate, n) {
  const d = new Date(isoDate);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

export function subtractDays(isoDate, n) {
  return addDays(isoDate, -n);
}

export function isToday(isoDate) {
  return isoDate === todayISO();
}

export function isYesterday(isoDate) {
  return isoDate === subtractDays(todayISO(), 1);
}
