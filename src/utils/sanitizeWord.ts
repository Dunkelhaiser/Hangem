export const sanitizeWord = (word: string) => {
    const nonLetters = /[^a-zA-Z\s]/g;
    const result = word.replace(nonLetters, "").toLowerCase().trim();
    return result;
};

export const removeWhitespaces = (word: string) => {
    const result = word.replace(/\s/g, "");
    return result;
};

export const onlyLatin = (word: string) => {
    const latinLettersRegex = /^[A-Za-z\s]+$/;
    return latinLettersRegex.test(word);
};
