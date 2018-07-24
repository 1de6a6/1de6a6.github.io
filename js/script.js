function getBlockNumber() {
  new Promise((resolve,reject) => {
    web3.eth.getBlockNumber(function(err, blockNumber) {
      if(!err) {
        resolve(blockNumber); 
      } else {
          reject(err);
      }
    });
  });  
}  

function getInternalTxs(blockNumber) {
  let url = "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x35afc160989db7b975e1e39f70c59531ef267858&startblock=0&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  new Promise((resolve,reject) => {
    $.get(url, function(body,err) {
      if(!err) {
        let internalTxs = body['result']; 
        resolve(internalTxs); 
      } else {
          reject(err);
      }
    });
  });  
}   

function getTradedToken(address,callback) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  new Promise((resolve,reject) => {
    liquidityContract.traded_token.call(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  
  
async function loadInternalTxs() {
  let blockNumber = await blockNumber();
  let internalTxs = await getInternalTxs(blockNumber);
  internalTxs.forEach(function(entry) {
    let txs = await getTradedToken(entry);
    let contractAddress = txs.contractAddress;
    console.log(contractAddress);
  });  
}

$(document).ready(async function() {
   await loadInternalTxs();
});  
