export const dateUtils = {
  toDaysSinceIssueWasPublished(value: string) {
    const timeDifferenceInMilliseconds = this.getTimeDifferenceInMilliseconds(
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

    return `Há ${hoursPassed} hora` + (hoursPassed > 1 ? 's' : '')
  },
  getTimeDifferenceInMilliseconds(date: Date) {
    return new Date().getTime() - date.getTime()
  },
  getDaysPassed(hoursPassed: number, timeInMilliseconds: number) {
    return (timeInMilliseconds / hoursPassed) * 24
  },
  getHoursPassed(timeInMilliseconds: number) {
    return parseInt((timeInMilliseconds / (1000 * 60 * 60)).toFixed())
  },
}
