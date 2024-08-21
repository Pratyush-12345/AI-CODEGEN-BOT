import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/signup`, { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const generateCode = async (language, prompt) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_URL}/code/generate`, 
    { language, prompt },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
