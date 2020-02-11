import { formatTime, formatOpeningHours } from '@lib/helpers'
import { mockRawOpeningHours } from '__mocks__/helpers'

describe('Format time in seconds', () => {
  it('should convert given time in seconds to 12-hour clock', () => {
    expect(formatTime(1000)).toEqual('12:16 AM')
    expect(formatTime(2000)).toEqual('12:33 AM')
    expect(formatTime(86399)).toEqual('11:59 PM')
    expect(formatTime(3600)).toEqual('1 AM')
    expect(formatTime(0)).toEqual('12 AM')
  })
})

describe('Format raw opening hours ', () => {
  it('should result in empty array as output', () => {
    const openingHours = formatOpeningHours()
    expect(openingHours).toEqual([])
  })

  it('should format the given opening hours', () => {
    const formatedOpeningHours = formatOpeningHours(mockRawOpeningHours)
    const expectedOutput = [
      { key: 'monday', value: [] },
      { key: 'tuesday', value: [] },
      { key: 'wednesday', value: [] },
      { key: 'thursday', value: [] },
      { key: 'friday', value: [['6 PM', '1 AM']] },
      {
        key: 'saturday',
        value: [
          ['9 AM', '11 AM'],
          ['4 PM', '11:59 PM'],
        ],
      },
    ]
    expect(formatedOpeningHours).toMatchObject(expectedOutput)
  })
})
