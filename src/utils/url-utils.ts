export const urlUtils = {
  getParam(param: string) {
		const url = new URL(String(window.location))

		return url.searchParams.get(param) ?? ''
  },
  setParam(param: string, value: string) {
		const url = new URL(String(window.location))

		url.searchParams.set(param, value)

		window.history.pushState({}, '', url)
  }
}
