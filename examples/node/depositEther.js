const Matic = require('maticjs').default
const config = require('./config')

const amount = '1000000000000000000' // amount in wei
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
  withdrawManagerAddress: config.WITHDRAWMANAGER_ADDRESS,
  depositManagerAddress: config.DEPOSITMANAGER_ADDRESS,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

// Approve token

// Deposit tokens
matic.depositEthers(from, {
  from,
  value: amount,
  onTransactionHash: () => {
    // action on Transaction success
    // console.log(tx)
  },
})