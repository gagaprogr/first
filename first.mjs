import { ApiRx, WsProvider } from '@polkadot/api';

const provider = new WsProvider();
var api = await ApiRx.create({provider:provider}).toPromise();
await api.isReady;

console.log(api.genesisHash.toHex());
console.log(api.consts.babe.epochDuration.toNumber());
console.log(api.consts.balances.existentialDeposit.toNumber());
console.log(api.consts.transactionPayment.transactionByteFee.toNumber());

