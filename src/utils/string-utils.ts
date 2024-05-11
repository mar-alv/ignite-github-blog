export const stringUtils = {
  toShortened(value: string | null | undefined) {
		if (!value)
			return ''

    return value.length > 180 ? value.substring(0, 180) + '...' : value
  }
}
