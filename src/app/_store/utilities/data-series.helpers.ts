export function arraySum(array: number[]): boolean {
    return ((array.reduce((a, b) => a + b, 0)) !== 0);
}
