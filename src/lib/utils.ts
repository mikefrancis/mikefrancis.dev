const WORDS_PER_MINUTE = 265;

export function calculateTimeToRead(rawString: string) {
  const totalWords = rawString
    .replace(/^\s+/, "")
    .replace(/\s+$/, "")
    .split(" ").length;

  return Math.ceil(totalWords / WORDS_PER_MINUTE);
}
