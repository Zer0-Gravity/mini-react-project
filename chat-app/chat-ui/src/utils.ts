export const randomId = (length: number) => {
    const charSet =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    //Map each random number to a character in charsetVariable
    return Array.from(array, (byte) => charSet[byte % charSet.length]).join("");
};

export const formatDate = (sendAt: string) => {
    const date = new Date(sendAt);
    const now = new Date();

    //Check if its today
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
        return date.toLocaleTimeString("en-Us", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    } else {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
    }
};
