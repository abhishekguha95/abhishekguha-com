export function readingTime(body = ''): number {
  const text = body.replace(/<!--[\s\S]*?-->/g, '').replace(/```[\s\S]*?```/g, '');
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 220));
}
