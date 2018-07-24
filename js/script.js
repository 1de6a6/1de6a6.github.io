function getBlockNumber(callback) {
  web3.eth.getBlockNumber(function(err, blockNumber) {
    if(!err) {
      callback(blockNumber); 
    }
  });
}  

function getInternalTxs(blockNumber) {
  let url = "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x35afc160989db7b975e1e39f70c59531ef267858&startblock=0&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  $.get(url, function(body,err) {
    let internalTxs = body['result']; 
    console.log(internalTxs); 
  });
}   

$(document).ready(function() {
  getBlockNumber(getInternalTxs);
});  
