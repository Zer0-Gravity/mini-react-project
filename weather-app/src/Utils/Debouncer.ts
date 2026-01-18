/* eslint-disable @typescript-eslint/no-explicit-any */
export function useDebounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
) {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: Parameters<T>) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
