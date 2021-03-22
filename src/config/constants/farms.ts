import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PTR',
    lpAddresses: {
      97: '0x159bDfDBE8D1fF0169b374c5D7af87696cD2c07e',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'PTR',
    tokenAddresses: {
      97: '0x159bDfDBE8D1fF0169b374c5D7af87696cD2c07e',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
