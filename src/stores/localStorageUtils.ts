export function saveToLocalStorage<TValue>(key: string, value: TValue) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getFromLocalStorage<TValue>(key: string): TValue | null {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item) as TValue
  }

  return null
}
