import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.printershares.finance/#/swap?inputCurrency=0x35c36d08046bb21ab4a1386842614220ddd18804',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.printershares.finance/#/add/BNB/0x35c36d08046bb21ab4a1386842614220ddd18804',
      },
    ],
  },
  {
    label: 'Printers',
    icon: 'FarmIcon',
    href: '/printers',
  },
  {
    label: 'Papers',
    icon: 'PoolIcon',
    href: '/papers',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://printershares.gitbook.io/printersharespts/security/audit',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x35c36D08046BB21Ab4a1386842614220ddD18804',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/printer-shares',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/printer-shares/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xd84f76bac02c2c23e3261CD6210af451bcd3b172',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/printerprotocol/',
      },
      {
        label: 'Docs',
        href: 'https://printershares.gitbook.io/printersharespts/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@FLS_PTS/',
      },
    ],
  },
]

export default config
