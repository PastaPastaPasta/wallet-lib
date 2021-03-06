const { expect } = require('chai');
const { Wallet } = require('../../../../src/index');
const { expectThrowsAsync } = require('../../../test.utils');
const sweepWallet = require('../../../../src/types/Wallet/methods/sweepWallet');

const paperWallet = {
  publicKey: 'ybvbBPisVjiemj4qSg1mzZAzTSAPk64Ppf',
  privateKey: 'XE6ZTNwkjyuryGho75fAfCBBtL8rMy9ttLq1ANLF1TmMo2zwZXHq',
};

describe('Wallet - sweepWallet', function suite() {
  this.timeout(5000);
  let emptyWallet;
  let emptyAccount;
  before(() => {
    emptyWallet = new Wallet({
      privateKey: paperWallet.privateKey,
      network: 'testnet',
      // offlineMode: true,
      transporter: { type: 'DAPIClient' },
    });
    emptyAccount = emptyWallet.getAccount();
  });
  it('should warn on empty balance', async () => {
    await emptyAccount.isReady();
    const exceptedException = 'Cannot sweep an empty private key (current balance: 0)';
    await expectThrowsAsync(async () => await emptyWallet.sweepWallet(), exceptedException);
    await emptyWallet.disconnect();
  });
  it('should warn on sweep from mnemonic', async () => {
    const exceptedException = 'Can only sweep wallet initialized from privateKey';
    const mockWallet = {
      walletType: 'HDWALLET',
      getAccount: () => ({ getAddress: () => ({ address: null }), isReady: () => true }),
    };
    expectThrowsAsync(async () => await sweepWallet.call(mockWallet), exceptedException);
  });
  after(async () => {
    await emptyWallet.disconnect();
  });
});
