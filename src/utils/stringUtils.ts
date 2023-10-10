export const stringUtils = {
  toShortened(value: string) {
    return value.length > 180 ? value.substring(0, 180) + '...' : value
  },
}
