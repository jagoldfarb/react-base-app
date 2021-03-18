export function scrollTop(): void {
  window.scrollTo(0, 0);
}

export function scrollBottom(): void {
  window.scrollTo(0, document.body.scrollHeight);
}

export function getFullUrl(url: string): string {
  return window.location.origin + url;
}
