import axios from 'axios';
import { Endpoints } from '@/api/endpoints';

export const Requests = {
    getProducts: async () => {
        return await axios.get(Endpoints.products);
    },
};