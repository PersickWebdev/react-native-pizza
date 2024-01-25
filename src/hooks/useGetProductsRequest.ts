import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '@/hooks/useReactRedux';
import { products } from '@/constants/data';
import { setProducts } from '@/storage/slices/ProductsSlice';

// import { Requests } from '@/api/requests';
// import { Alert } from 'react-native';

export const useGetProductsRequest = () => {
    const dispatch = useTypedDispatch();
    const { products: storageProducts } = useTypedSelector((state) => state.Products);
    const [ isProductsLoading, setIsProductsLoading ] = useState<boolean>(false);

    const getProductsRequest = () => {
        setIsProductsLoading(true);
        dispatch(setProducts(products));
        setIsProductsLoading(false);
    };

    // JSON SERVER NOT WORKING
    // const getProductsRequest = async () => {
    //     try {
    //         setIsProductsLoading(true);
    //         const response = await Requests.getProducts();
    //         Alert.alert(response.data);
    //     } catch(error) {
    //         Alert.alert(error.data.message);
    //     } finally {
    //         setIsProductsLoading(false);
    //         Alert.alert('finally');
    //     }
    // };

    return { getProductsRequest, isProductsLoading, storageProducts };
};