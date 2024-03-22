const Web3 = require('web3');

// 连接到以太坊测试网络
const web3 = new Web3('https://ropsten.infura.io/v3/your_infura_project_id');

// 获取最新的一个区块信息
web3.eth.getBlock('latest')
  .then(block => {
    console.log('Latest Block:', block);
  })
  .catch(error => {
    console.error('Error:', error);
  });
