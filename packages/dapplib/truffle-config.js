require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stomach response outside proud install close army gasp'; 
let testAccounts = [
"0x2cce4509f771f87967c8ca5422976b71c37b79ea2ff2ae54774e87dcad7fc58b",
"0x5da978c4f3e9165c93adf04f2d121fc78f0eec4ed5899ac140a9cced9f53b64d",
"0x8c8de84ccecf768563803a54d5e4a910f942aa889d5fa3ba277a5d9e2de13442",
"0x49fa940d17cfda77adca4a0edcac5cd337b45970e3f9427621b8c8487e3a7b97",
"0xcc71fbfcaf716a7ddfa7cda8fed708ec75b826a470a3aaf9a6e5ea49679ce0cc",
"0x0d3027201ec3826f202af8c9e08f210cfb4e6c77a5289952325d066bb1538ead",
"0xd3a17b0b6e2dfff74a40cccfc016cf65deb0782a6d77c888140c18fe8cbc495b",
"0x4ee0b2e3c12181587c269ba6c2101601b8e97ac1e316a968c9199854400c1dd4",
"0xd2f0ac754f6c4c8f3760f1089badf800f9709f2fa7757b66d72fb46e51bd0a31",
"0x6dfcf7efdd3a9a43f6571c7977147ca573da145222a1263bc6cbb5efb48df452"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

