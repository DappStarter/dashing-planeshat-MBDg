require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note script method hover clog sure seek'; 
let testAccounts = [
"0xd66c07debc4b945789e6df1dd907124136722fb14b8bbc4ff02adac060d95f3f",
"0xc78f0f289e55964cc96ba9d288b73a7271dfa9ae9bbfdf1b54feda5bea5d5708",
"0xd81c4dd843c7a08a6d6c0b611207e4361268463b0a7fe2dd1e1f111fd1eee32f",
"0x3cfd68a580a76ca5bfc6ac227626bb0171f3e91ec80030d4832f4049ce52fb0e",
"0x174382eb278cd401e1bda92457d85080b7569bcfdcc5ad078fb58cd7be916bd9",
"0x5227b83e15c77fae302ddcf07a74d2a3d2c30a425854d26f34df75c99823ed0f",
"0x74f403b76cdb25fec437ec390d3c791a245439cdec78b5fb795ce7ae0663a105",
"0xa35405997cbb0d492adcbd9ea255432398f51de6714c6cf70ac79dc926bc3ee2",
"0x7b330b53ebb3f5d95b10c52a94ce05eddc33628f69abf3311f2acf236c3863e7",
"0x23ec5f0823645bd3008a8fd99da28dd6af0f682bd05c9757d5c416edd9ac34fd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


