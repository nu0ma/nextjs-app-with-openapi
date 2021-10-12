import api from '../api/$api';
import aspida from '@aspida/axios';
import axios from 'axios';

const axiosConfig = { baseURL: 'http://localhost:3000' };

export const apiClient = api(aspida(axios, axiosConfig));
