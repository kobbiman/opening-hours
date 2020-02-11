import PropTypes from 'prop-types'

const SECONDS_IN_HOUR = 3600

export const formatTime = value => {
  const hours = Math.floor(value / SECONDS_IN_HOUR)
  const minutes = Math.floor((value % SECONDS_IN_HOUR) / 60)

  const time = [hours % 12 || 12]

  if (minutes > 0) {
    time.push(`0${minutes}`.slice(-2))
  }

  const amOrPm = hours < 12 ? 'AM' : 'PM'
  return [time.join(':'), amOrPm].join(' ')
}

/**
 *
 * @param {Object} dayValues
 * @param {Object} nextDayValues
 */

const parseDay = (dayValues, nextDayValues) => {
  if (dayValues.length === 0) return dayValues

  const entries = []

  for (let index = 0; index < dayValues.length; index++) {
    const { value, type } = dayValues[index]
    const entryTime = formatTime(value)

    if (type === 'open') {
      // Add a new sub array if it's not the last entry
      if (index < dayValues.length - 1) {
        entries.push([entryTime])
      } else {
        // If it's 'open' and the last entry , find first 'close' in the next day
        entries.push([entryTime, formatTime(nextDayValues[0].value)])
      }
    } else {
      // If the first value of the array is 'close', do nothing as its irrelevant for the day context, otherwise
      // add entry value to last sub array in array
      if (index !== 0) {
        entries[entries.length - 1].push(entryTime)
      }
    }
  }

  return entries
}

export const formatOpeningHours = data => {
  if (!data) return []
  const keys = Object.keys(data)
  const formattedDays = keys.map((key, i) => {
    const dayData = data[key]

    // Get next day value, if index out of bounds return first item
    const nextDay = data[keys[i + 1]] || data[keys[0]]
    return { key, value: parseDay(dayData, nextDay) }
  })

  return formattedDays
}

export const weekdayName = new Date().toLocaleDateString('en', { weekday: 'long' }).toLowerCase()

export const TuppleChecker = (...validators) =>
  PropTypes.arrayOf((_, index) => {
    const currentValidators = validators.filter((v, i) => i === index)
    if (currentValidators.length <= 0) return true
    const [currentValidator] = currentValidators

    return currentValidator
  })
