const liquidityContractABI = [{"constant":false,"inputs":[],"name":"reactivate_trading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deactivate_trading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eth_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw_eth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eth_is_seeded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_eth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_new_commission_ratio","type":"uint256"}],"name":"change_admin_commission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin_commission_activated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_is_seeded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"}],"name":"get_amount_buy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"seed_additional_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount_give","type":"uint256"}],"name":"sell_tokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"commission_ratio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deactivate_admin_comission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"traded_token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"}],"name":"get_amount_sell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_seed_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_additional_eth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"eth_seed_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"trading_deactivated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activate_admin_commission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_traded_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_traded_token","type":"address"},{"name":"_eth_seed_amount","type":"uint256"},{"name":"_traded_token_seed_amount","type":"uint256"},{"name":"_commission_ratio","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];

function getBlockNumber() {
  return new Promise((resolve,reject) => {
    web3.eth.getBlockNumber(function(err, blockNumber) {
      console.log(err,blockNumber);
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
  return new Promise((resolve,reject) => {
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

function getTradedToken(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
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
  let blockNumber = await getBlockNumber();
  console.log(blockNumber);
  let internalTxs = await getInternalTxs(blockNumber);
  console.log(blockNumber,internalTxs);
  internalTxs.forEach(async function(entry) {
    console.log(entry);
    let txs = await getTradedToken(entry);
    let contractAddress = txs.contractAddress;
    console.log(contractAddress);
  });  
}

$(document).ready(function() {
   loadInternalTxs();
});  
