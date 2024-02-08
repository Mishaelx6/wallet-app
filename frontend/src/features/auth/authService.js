import axios from 'axios'
import { API_URL } from '../constants'

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/api/users/login`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    console.log('Token after login:', response.data.token);
  }

  return response.data
}

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/api/users/register`, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const getAllUsers = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API_URL}/api/users/get_users`, config);

    return response.data;
  } catch (error) {
    throw error;
  }
}

const logout = () => localStorage.removeItem('user')

const authService = {
  login,
  logout,
  register,
  getAllUsers,
}

export default authService
