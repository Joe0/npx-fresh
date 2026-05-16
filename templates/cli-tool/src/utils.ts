/**
 * Formats a greeting message
 * @param name - The name to greet
 * @returns A formatted greeting
 */
export function formatGreeting(name: string): string {
  return `Hello, ${name}!`
}

/**
 * Generates a range of numbers
 * @param start - Start number
 * @param end - End number
 * @returns Array of numbers
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
