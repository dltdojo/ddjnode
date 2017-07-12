const blockchainAnchor = require('blockchain-anchor')

// https://live.blockcypher.com/btc-testnet/address/mqw6tYvfBrELNYJtwKpCod4FjbmxRaRCfN

const TEST_Address = "mqw6tYvfBrELNYJtwKpCod4FjbmxRaRCfN"
const TEST_Wif = "cUPa6Zr2jPGREvWsmz8GhjaehD824kFNFjvVRF6uQZFyqLNzUYco"

function embed(hexData, wif) {
    let anchorOptions = {
        useTestnet: true,
        blockchainServiceName: 'insightbitpay',
        feeSatoshi: 98000
    }
    let anchor = new blockchainAnchor(wif, anchorOptions)
    anchor.embed(hexData, function (err, transactionId, rawTransaction) {
        if (err) {
            // do something
            console.log(err)
        } else {
            console.log('New transaction Id = ' + transactionId);
            console.log('Raw tx = ' + rawTransaction);
        }
    });
}

let message = "HELLO DLTDOJO 2017"
let hexData = Buffer.from(message).toString('hex')
// 
embed(hexData, TEST_Wif)