import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

const client = axios.create({
  baseURL: API,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

export const createBooking = (payload) => client.post('/bookings', payload).then(r => r.data);
export const createContact = (payload) => client.post('/contacts', payload).then(r => r.data);
export const createCorporateInquiry = (payload) => client.post('/corporate-inquiries', payload).then(r => r.data);
export const fetchHealth = () => client.get('/health').then(r => r.data);

export default client;
