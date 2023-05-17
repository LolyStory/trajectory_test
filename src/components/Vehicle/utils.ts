export const isCorrectNumber = (str: string): boolean =>
    !isNaN(Number(str)) && !isNaN(parseFloat(str));