import { useState, useCallback } from 'react';
import { AdditionalProducts, EndProducts } from '@/constants/data';
import { Product } from '@/components/sections/ProductList/ProductCard/ProductCard.types';
import { useSearch } from '@/hooks/useSearch';

export const useRefresh = () => {
    const [ isRefreshing, setIsRefreshing ] = useState<boolean>(false);
    const { setCurrentProducts } = useSearch();

    const handleOnRefresh = useCallback(() => {
        setIsRefreshing(true);
        setTimeout(() => {
            setCurrentProducts((state: Product[]) => {
                const result = [...state];
                result.unshift(...AdditionalProducts);
                return [...result];
            });
            setIsRefreshing(false);
        }, 2000);
    }, []);

    const handleOnEndReached = useCallback(() => {
        setCurrentProducts((state: Product[]) => {
            const result = [...state];
            result.push(...EndProducts);
            return [...result];
        });
    }, []);

    return {
        isRefreshing,
        handleOnRefresh,
        handleOnEndReached,
    };
};