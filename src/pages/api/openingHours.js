import { getRandomOpeningHours } from '@mockdb'

export default (req, res) => {
  // Grab some random opening hours
  const openingHours = getRandomOpeningHours()
  res.status(200).json(openingHours)
}
