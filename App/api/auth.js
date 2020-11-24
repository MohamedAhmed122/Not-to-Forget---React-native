import { apiClient } from '../api/Client'

export const Login = (email, password) => 
    apiClient.post('/login', {email, password})