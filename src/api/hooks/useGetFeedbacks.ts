import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { Requests } from '@/api/requests';
import { useTypedDispatch, useTypedSelector } from '@/hooks/useReactRedux';
import { setFeedbacks } from '@/storage/slices/FeedbacksSlice';
import { ERRORS } from '@/constants/error';
import { Error } from '@/api/types';

export const useGetFeedbacks = () => {
    const dispatch = useTypedDispatch();
    const { feedbacks } = useTypedSelector((state) => state.Feedbacks);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<Error>({
        status: false,
        message: '',
    });

    const getFeedbacks = async () => {
        try {
            setIsLoading(true);
            const Response = await Requests.getFeedbacksRequest();
            if (Response.data) {
                dispatch(setFeedbacks(Response.data));
                setError((state: Error) => {
                    return {
                        ...state,
                        status: false,
                        message: '',
                    }
                });
            }
        } catch(error: AxiosError) {
            setIsLoading(false);
            if (error.response) {
                setError((state: Error) => {
                    return {
                        ...state,
                        status: true,
                        message: ERRORS.Feedbacks.badRequest
                    }
                });
            } else if (error.request) {
                setError((state: Error) => {
                    return {
                        ...state,
                        status: true,
                        message: ERRORS.Feedbacks.badRequest
                    }
                });
            } else {
                setError((state: Error) => {
                    return {
                        ...state,
                        status: true,
                        message: ERRORS.Feedbacks.internalError
                    }
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        (async () => await getFeedbacks())();
    }, []);

    return { feedbacks, isLoading, error };
};