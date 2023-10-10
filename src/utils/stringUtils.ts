export const stringUtils = {
  short(value: string) {
    return value.length > 180 ? value.substring(0, 180) + '...' : value
  },
}
