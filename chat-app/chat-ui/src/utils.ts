export const randomId = (length: number) => {
    const charSet =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    //Map each random number to a character in charsetVariable
    return Array.from(array, (byte) => charSet[byte % charSet.length]).join("");
};
