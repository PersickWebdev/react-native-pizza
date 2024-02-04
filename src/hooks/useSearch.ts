import { useState, useEffect } from 'react';
import { useTypedSelector } from '@/hooks/useReactRedux';
import { Products } from '@/constants/data';
import { Product } from '@/components/sections/ProductList/ProductCard/ProductCard.types';

export const useSearch = () => {
    const { searchValue, filterOption } = useTypedSelector((state) => state.Filter);
    const [ currentProducts, setCurrentProducts ] = useState<Product[]>(Products);

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

    const searchedProducts = searchProductByName(currentProducts, searchValue, filterOption);

    useEffect(() => {
        setCurrentProducts([...searchedProducts]);
    }, [searchValue, filterOption]);

    return { currentProducts, setCurrentProducts };
};