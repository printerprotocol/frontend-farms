import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from 'printersharesfinance-uikit'
import { NavLink } from 'react-router-dom'


const StyledfarmsStakingCard = styled(Card)`
  background: linear-gradient(#2E6301, #eac625);
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 54px;
`
const EarnAssetCard = () => {

  // Always include CAKE
  const assets = ['$PTS']

  return (
    <StyledfarmsStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Earn
        </Heading>
        <CardMidContent color="invertedContrast">{assets}</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            in Printers and Papers
          </Heading>
          <NavLink exact activeClassName="active" to="/printers" id="farms-cta">
            <ArrowForwardIcon mt={30} color="secondary" />
          </NavLink>
        </Flex>
      </CardBody>
    </StyledfarmsStakingCard>
  )
}

export default EarnAssetCard
