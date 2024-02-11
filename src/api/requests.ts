import axios from 'axios';
import { Endpoints } from '@/api/endpoints';

export const Requests = {
    getFeedbacksRequest: async () => {
        return await axios.get(Endpoints.feedbacks);
    },
};