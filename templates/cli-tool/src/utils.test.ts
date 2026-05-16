import { describe, it, expect } from 'vitest'
import { formatGreeting, range } from './utils'

describe('formatGreeting', () => {
  it('should format a greeting', () => {
    expect(formatGreeting('Alice')).toBe('Hello, Alice!')
    expect(formatGreeting('Bob')).toBe('Hello, Bob!')
  })
})

describe('range', () => {
  it('should generate a range of numbers', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(range(0, 3)).toEqual([0, 1, 2, 3])
  })

  it('should handle single number ranges', () => {
    expect(range(5, 5)).toEqual([5])
  })
})
