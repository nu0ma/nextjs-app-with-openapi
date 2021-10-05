import api from '../api/$api';
import aspida from '@aspida/axios';
import axios from 'axios';

export const apiClient = api(
  aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL })
);
