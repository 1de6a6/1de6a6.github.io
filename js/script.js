const liquidityContractABI = JSON.parse('[{"constant":false,"inputs":[],"name":"reactivate_trading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deactivate_trading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eth_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw_eth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eth_is_seeded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_eth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_new_commission_ratio","type":"uint256"}],"name":"change_admin_commission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin_commission_activated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_is_seeded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"}],"name":"get_amount_buy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"seed_additional_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount_give","type":"uint256"}],"name":"sell_tokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"commission_ratio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deactivate_admin_comission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"traded_token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"}],"name":"get_amount_sell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_seed_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_additional_eth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"eth_seed_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"trading_deactivated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activate_admin_commission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_traded_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_traded_token","type":"address"},{"name":"_eth_seed_amount","type":"uint256"},{"name":"_traded_token_seed_amount","type":"uint256"},{"name":"_commission_ratio","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]');
const tokenContractABI = JSON.parse('[{"constant":false,"inputs":[{"name":"_newPriviledgedAddress","type":"address"}],"name":"ownerSetPriviledgedAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"updateTokenStatus","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokensFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextThaw","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"priviledgedAddressBurnUnsoldCoins","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"crowdfundDeadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextFreeze","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priviledgedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"ownerTransferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"Frozen","type":"bool"}],"name":"LogTokensFrozen","type":"event"}]');

function sendTransaction(tx) {
  return new Promise((resolve,reject) => {
    web3.eth.sendTransaction({from:tx.from,to:tx.to,value:tx.value}, function(err,val) {
      if(!err) {
        resolve(val);
      } else {
          reject(err);
      }
    });
  });
}  
                

function getBlockNumber() {
  return new Promise((resolve,reject) => {
    web3.eth.getBlockNumber(function(err, blockNumber) {
      if(!err) {
        resolve(blockNumber); 
      } else {
          reject(err);
      }
    });
  });  
}  

function getTradedToken(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.traded_token(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}

function sellTokens(tx) {
  return new Promise((resolve,reject) => {
    let liquidityContract = web3.eth.contract(liquidityContractABI).at(tx.to);
    let data = liquidityContract.sell_tokens.getData(tx.value);
    web3.eth.sendTransaction({from:tx.from,to:tx.to,data:data},function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}


function isDeactivated(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.trading_deactivated(function(err,body) {
      if(!err) {
        console.log(body);
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getTradedTokenBalance(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.traded_token_balance(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getETHBalance(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.eth_balance(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getAdmin(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.admin(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getCommission(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.commission_ratio(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  
  
function getTxs(url) {
  return new Promise((resolve,reject) => {
    $.get(url).done(function(body) {
      resolve(body['result']);
    });
  });                   
}  

function getTokenName(address) {
  let tokenContract = web3.eth.contract(tokenContractABI).at(address);
  return new Promise((resolve,reject) => {
    tokenContract.name(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getTokenDecimals(address) {
  let tokenContract = web3.eth.contract(tokenContractABI).at(address);
  return new Promise((resolve,reject) => {
    tokenContract.decimals(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function initSearch(array) {
  $('.ui.search')
    .search({
      source: array
    })
}  

function initSearchClickListener() {
  $('.ui.search').change(function() {
    let title = $('.title').text();
    let contractsObject = JSON.parse(localStorage.getItem('tableInformation'));
    $('#tradedToken').text(title);
    loadContractInformation(contractsObject[title]);   
  })
}                                                                                            

async function initBuyClickListener(tx) {
  $('.ui.green.ok.inverted.button').on('click', async function() {
    console.log("here");
    await sendTransaction({from:tx.from,to:tx.to,value:tx.value});                    
  });    
}
                                                                                                                           
async function initButtonClick() {
  $('.ui.button').on('click', async function(e) {
    let tradeType = $(e.currentTarget).text();
    let html = $(e.currentTarget)[0].offsetParent.previousSibling; 
    let inputValue = parseFloat($(html).find('input').val());
    let userAddress = localStorage.getItem("userAddress");
    let contractAddress = $(html.previousSibling.previousSibling.previousSibling).text();
    let tradedTokenAddress = await getTradedToken(contractAddress);   
    let tokenDecimals = parseInt(await getTokenDecimals(tradedTokenAddress));
    let tokenBalance = await getTradedTokenBalance(contractAddress);
    let ethBalance = await getETHBalance(contractAddress);
    let tradeAmount, ethAmount;
    tradeType === "Buy" ? (tradeAmount = inputValue * Math.pow(10,tokenDecimals),
    ethAmount = (tradeAmount*ethBalance)/(tokenBalance + tradeAmount),
    $('#ethAmount').text(ethAmount.toString()), 
    await initBuyClickListener({from:userAddress,to:contractAddress,value:parseInt(ethAmount*1e18)}),
    $('.ui.basic.modal').modal('show'))
    : (tradeAmount = inputValue * Math.pow(10,tokenDecimals), await sellTokens({from:userAddress,to:contractAddress,value:tradeAmount}));
  });
}  

async function get24HourVolumeETH(contractAddress) {
  let oneDayInBlocks = parseInt(24*60*60/15);
  let blockNumber = await getBlockNumber();    
  let startBlock = blockNumber - oneDayInBlocks;
  let url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + contractAddress + "&startblock=" + startBlock + "&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let totalVolume = 0;
  let externalTxs = await getTxs(url);  
  for(let i in externalTxs) {
    let txs = externalTxs[i];
    totalVolume += parseInt(txs.value);
  }
  return totalVolume;
} 

async function get24HourVolumeToken(contractAddress) {
  let tradedTokenAddress = await getTradedToken(contractAddress);
  let totalVolume = 0;
  let oneDayInBlocks = parseInt(24*60*60/15);
  let blockNumber = await getBlockNumber();    
  let startBlock = blockNumber - oneDayInBlocks;
  let url = "https://api.etherscan.io/api?module=logs&action=getLogs" + "&fromBlock=" + startBlock
  + "&toBlock=latest&address=" + tradedTokenAddress + "&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  + "&topic2=" + "0x000000000000000000000000" + contractAddress.slice(2) + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let tokenTxs = await getTxs(url);  
  for(let i in tokenTxs) {
    let txs = tokenTxs[i];
    totalVolume += parseInt("0x" + txs.data.slice(51));
  }
  let tokenDecimals = parseInt(await getTokenDecimals(tradedTokenAddress));
  totalVolume = totalVolume/(Math.pow(10,tokenDecimals));
  return totalVolume;
} 

async function loadContractInformation(arr) {
  let query = '#main > div.right-container > div > div > table';
  let query2 = '#main > div.left-container > div > div > table';
  for(let i in arr) {
    let contractAddress = arr[i];
    let tradedTokenAddress = await getTradedToken(contractAddress);
    let name = await getTokenName(tradedTokenAddress);
    let commission = await getCommission(contractAddress);
    commission = (parseInt(commission)/1e18).toString() + " %";
    let admin = await getAdmin(contractAddress);
    let ethVolume = ((await get24HourVolumeETH(contractAddress))/Math.pow(10,18)).toFixed(2);
    let tokenVolume = (await get24HourVolumeToken(contractAddress)).toFixed(2);
    let deactivated = new Boolean(await isDeactivated(contractAddress));
    let rowHTML = "<tr><td>" + admin + "</td><td>" + contractAddress + "</td><td>"
    +  !deactivated  + "</td><td>"
    + ethVolume.toString() + " ETH/" + tokenVolume.toString() + " " + name.toUpperCase() + "</td><td>" + commission + "</td><td>"
    + '<div class="ui small input"><input type="number"></div>' + "</td><td>" 
    + '<div class="ui large buttons"> <button class="ui button">Buy</button> <div class="or"></div> <button class="ui button">Sell</button> </div>'  
    + "</td></tr>";
    $(query).append(rowHTML);
  }  
  initButtonClick();
}  

function loadTable(object) {
  let query = '#main > div.left-container > div > div > table';   
  for(let i in object) {
    let name = i;
    let tokenVolume = object[i];
    let rowHTML = "<tr><td>" + name.toUpperCase() + "</td><td>" + tokenVolume.toFixed(2) + "</td></tr>";
    $(query).append(rowHTML);    
  }  
}  

async function loadSearch() {
  let blockNumber = await getBlockNumber();
  let url = "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x35afc160989db7b975e1e39f70c59531ef267858&startblock=0&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let internalTxs = await getTxs(url);
  let internalTxsArray = "";
  let categoryContent = [];
  let contractsObject = {};
  let tokenObject = {};
  for(let i in internalTxs) {
    let contractAddress = internalTxs[i].contractAddress;
    let tradedTokenAddress = await getTradedToken(contractAddress);
    let name = await getTokenName(tradedTokenAddress);
    let tokenVolume = (await get24HourVolumeToken(contractAddress)); 
    tokenObject[name] ? tokenObject[name] += tokenVolume : (tokenObject[name] = 0, tokenObject[name] += tokenVolume);  
    let searchObject = {'title':name};
    if(!~categoryContent.indexOf(searchObject)) {
      categoryContent.push(searchObject);
    }
    typeof contractsObject[name]  === 'Array' ? contractsObject[name].push(contractAddress) : contractsObject[name] = [contractAddress];
  }
  loadTable(tokenObject);
  initSearch(categoryContent);
  localStorage.setItem("tableInformation",JSON.stringify(contractsObject));
  initSearchClickListener();  
}
 
$(document).ready(function() {
  loadSearch();
});  
