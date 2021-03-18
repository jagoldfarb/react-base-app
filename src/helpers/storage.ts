export function getItem(key: string): null | string | JSON {
  const item: string | null = localStorage.getItem(key);
  return !!item && typeof item === 'object' ? JSON.parse(item) : item;
}

export function setItem(key: string, value: string): void {
  const item: string = typeof value === 'object' ? JSON.stringify(value) : value;
  localStorage.setItem(key, item);
}

export function removeItem(key: string): void {
  localStorage.removeItem(key);
}

export function clearItems(): void {
  localStorage.clear();
}
