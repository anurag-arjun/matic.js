const Matic = require('maticjs').default
const config = require('./config')

const from = '0x6e0c217de3235f1d8a95605d10bcc1b36ff7996f' // from address
const to = '0x7ed7f36694153ba6eff6ca6726b60f6e2bb17fcf' // to address
const amount = '1000000000000000' // amount in wei

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
  maticWethAddress: config.MATICWETH_ADDRESS,
})

matic.wallet = '<private-key>' // prefix with `0x`

// Send Tokens
matic.transferEthers(to, amount, {
  from,
  parent: true, // For token transfer on Main network (false for Matic Network)
  onTransactionHash: () => {
    // action on Transaction success
  },
})
