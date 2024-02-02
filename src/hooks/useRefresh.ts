import { useState, useCallback } from 'react';
import { AdditionalProducts, EndProducts } from '@/constants/data';
import { useSearch } from '@/hooks/useSearch';

export const useRefresh = () => {
    const [ isRefreshing, setIsRefreshing ] = useState<boolean>(false);
    const { searchedProducts } = useSearch();

    const handleOnRefresh = useCallback(() => {
        setIsRefreshing(true);
        setTimeout(() => {
            searchedProducts.unshift(...AdditionalProducts);
            setIsRefreshing(false);
        }, 2000);
    }, []);

    const handleOnEndReached = useCallback(() => {
        searchedProducts.push(...EndProducts);
    }, []);

    return {
        isRefreshing,
        handleOnRefresh,
        handleOnEndReached,
    };
};