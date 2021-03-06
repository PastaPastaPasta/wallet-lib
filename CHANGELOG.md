# [6.0.0](https://github.com/dashevo/wallet-lib/compare/v5.0.3...v6.0.0) (2020-03-10)


- **breaking:**
  - Wallet:
    - Wallet({transport}) is now Wallet({transporter}) (#102)
  - Account:
    - account.transport is now account.transporter (#102)
    - account.transport.transport is now account.transporter.client (#102)
    - fetchTransactionInfo() is removed. Use getTransaction() instead. (#102)
    - .getTransactionHistory() removed (#102, 01d5b31)
  - Transporter:
    - new Transporter() is now invalid, use Transporters.resolve(arg) instead. (#102)
  - Storage:
    - Storage cannot be assigned an events anymore (storage.parentEvents now). (#102)
    - ChainWorker:
    - ChainWorker became a ChainPlugin using subscribeToBlock() (#102)
  - misc:
    - all events payload will now be returned under form {type, payload} (#102)
    - all events are now accessed via .on() instead of .events.on() (#102)
    - all events are to be emmited using .emit() instead of .events.emit() (#102)
    - format of transactions internally has changed (returns a proper Dashcore Transaction object) (#102)
    - internal reference to blockheight changed to blockHeight (#102)
    - format of blocks internally has changed (returns a proper Dashcore Block object) (#102)
    - format of utxo internally has changed (returns a proper Dashcore UTXO object) (#102)

- **Feat**:
  - Wallet: 
    - Sweep paper wallet (#83)
    - Allow to generate a new privateKey (4e120f6)
  - Account:
    - added debug parameters (#102)
    - Added account.getBlockHeader(identifier) method (#102)
    - account.cacheBlockHeaders is now a available option (def: true)
  - Storage:
    - added Storage.importBlockHeader (#102)
    - added Storage.getBlockHeader (#102)
    - added Storage.searchBlockHeader (#102)
  - Transporter: 
    - Transporter arg can take devnetName when type is DAPI (connects to palinka instead of evonet). (#102)
    - subscribeToAddressesTransaction() (#102)
    - subscribeToBlocks() (#102)
    - subscribeToBlockHeaders() - temporary for BloomFilters (#102)
  - Workers: 
    - Workers support onStart() method. (#102)
  - Plugins:
    - Plugins support onStart() method and send a PLUGIN/pluginName/STARTED event. (#102)
- **Impr**: 
  - moved from('event') to EventEmitter2 + wildcard support (5241ce1, 4db66d6, d20df76)
- **Fix**:
  - KeyChain: 
    - .getKeyForPath when SINGLE_ADDRESS mode is now returned as PrivateKey (#102)
  - Account:
    - sequential account index + transporter missing method reporting #103
- **Perf**:
  - removed localforage from default adapter. #104
- **Test**: 
  - Sweep wallet test + integration (ebbd0f8, 
6bd24a3)
  - FakeDevnet class (db46b05)

# [5.0.3](https://github.com/dashevo/wallet-lib/compare/v5.0.2...v5.0.3) (2020-02-01)

- **Feat**:
  - Account:
    - getIdentityHDKey (#99)
- **Fix**: 
    - typos (#98)
