import { dateUtils } from '@utils'

export const arrayUtils = {
  sortByDate(a: string, b: string) {
    return dateUtils.getTimeDifferenceInMilliseconds(new Date(a), new Date(b))
  },
}
