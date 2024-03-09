export const getWordLetterLastIndex = (input: string | undefined, wordIndex: number) => {
  if (!input) return;
  return input.split(" ")[wordIndex].length;
};
