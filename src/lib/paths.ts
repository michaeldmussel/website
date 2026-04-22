export function withBase(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return cleanPath ? `${base}${cleanPath}` : base;
}
