import { useTypedSelector } from '@/hooks/useReactRedux';
import { Products, AdditionalProducts, EndProducts } from '@/constants/data';
import { Product } from '@/components/sections/ProductList/ProductCard/ProductCard.types';

export const useGetProductsRequest = () => {
    const { searchValue, filterOption } = useTypedSelector((state) => state.Filter);
    // const [ isProductsLoading, setIsProductsLoading ] = useState<boolean>(false);
    // const [ isRefreshing, setIsRefreshing ] = useState<boolean>(false);

    const searchProductByName = (products: Product[], searchValue: string, filterOption: string) => {
        if (!products.length || !searchValue) return Products;

        if (!filterOption) {
            const searchedProducts = products.filter((product: Product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
            return searchedProducts.length > 0 ? searchedProducts : [];
        } else {
            let filteredProducts = [];
            products.forEach((product: Product) => {
                Object.keys(product).forEach((key: string) => {
                    if (key.toLowerCase() === filterOption.toLowerCase()) {
                        if (product[key]) {
                            filteredProducts.push(product);
                        }
                    }
                })
            });
            const searchedProducts = filteredProducts.filter((product: Product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
            return searchedProducts.length > 0 ? searchedProducts : [];
        }
    };

    const searchedProducts = searchProductByName(Products, searchValue, filterOption);

    // const handleOnRefresh = useCallback(() => {
    //     setIsRefreshing(true);
    //     setTimeout(() => {
    //         searchedProducts.unshift(...AdditionalProducts);
    //         setIsRefreshing(false);
    //     }, 2000);
    // }, []);

    // const handleOnEndReached = useCallback(() => {
    //     searchedProducts.push(...EndProducts);
    // }, []);

    return {
        searchedProducts,
        // isProductsLoading,
        // isRefreshing,
        // handleOnRefresh,
        // handleOnEndReached,
    };
};