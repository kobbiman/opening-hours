import React from 'react'
import { Flex } from 'rebass/styled-components'
import Container from '@components/Container'
import Text from '@components/Typography'

const Header = () => {
  return (
    <Container>
      <Flex color="text" bg="transparent" alignItems="center">
        <Text py={2} fontWeight="bold">
          WoltApp
        </Text>
      </Flex>
    </Container>
  )
}

export default Header
