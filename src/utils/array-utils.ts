import { dateUtils } from '@utils'
import { Issue } from '@interfaces'

export const arrayUtils = {
  sortByDate(a: string, b: string) {
    return dateUtils.getTimeDifferenceInMilliseconds(new Date(a), new Date(b))
  },
	filterIssuesBySearch(issues: Issue[], search: string) {
		return issues.filter((i) => {
			const title = i.title.toUpperCase()
			const description = i.description.toUpperCase()

			return description.includes(search.toUpperCase()) || title.includes(search.toUpperCase())
		})
	}
}
