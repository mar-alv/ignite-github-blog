export const dateUtils = {
  toDaysSinceIssueWasPublished(value: string) {
    const timeDifferenceInMilliseconds = this.getTimeDifferenceInMilliseconds(
      new Date(),
      new Date(value),
    )

    const hoursPassed = this.getHoursPassed(timeDifferenceInMilliseconds)

    if (hoursPassed > 23) {
      const daysPassed = this.getDaysPassed(
        timeDifferenceInMilliseconds,
        hoursPassed,
      )

      return `Há ${daysPassed} dia` + (daysPassed > 1 ? 's' : '')
    }

    if (hoursPassed < 1) {
      return 'Há pouco'
    }

    return `Há ${hoursPassed} hora` + (hoursPassed > 1 ? 's' : '')
  },
  getTimeDifferenceInMilliseconds(date1: Date, date2: Date) {
    return date1.getTime() - date2.getTime()
  },
  getDaysPassed(hoursPassed: number, timeInMilliseconds: number) {
    return (timeInMilliseconds / hoursPassed) * 24
  },
  getHoursPassed(timeInMilliseconds: number) {
    return parseInt((timeInMilliseconds / (1000 * 60 * 60)).toFixed())
  },
}
