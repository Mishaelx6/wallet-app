import axios from 'axios';
import { API_URL } from '../constants';

const sendMoney = async (transactionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      API_URL + '/api/transfer',
      transactionData,
      config,
    );
    if (response.data && response.data.message) {
     // If there is a message, handle it as needed
     // For example, dispatch an action to update the UI
     // and show a toast message
     return { message: response.data.message };
   }


    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error sending money:', error.message);
// If it's a different error, you can rethrow or return a custom error message
    throw new Error('Failed to send money');
  }
};

const getTransactions = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(
    API_URL + '/api/get_transactions/' + userId,
    config
  )

  return response.data
}

const getMoneySend = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/api/get_money_send', config)
  return response.data
}

const getMoneyReceive = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/api/get_money_receive', config)
  return response.data
}
const addMoney = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(
    API_URL + '/api/deposit',
    { amount: data.amount },
    config
  )
  return response.data
}

const transactionService = {
  sendMoney,
  getTransactions,
  getMoneySend,
  getMoneyReceive,
  addMoney,
}

export default transactionService
