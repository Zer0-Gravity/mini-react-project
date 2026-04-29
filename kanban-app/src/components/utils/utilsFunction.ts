export const randomId = (value: number) => {
    const stringSet =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const newArr = new Uint8Array(value);
    crypto.getRandomValues(newArr);

    return Array.from(
        newArr,
        (byte) => stringSet[byte % stringSet.length],
    ).join("");
};
