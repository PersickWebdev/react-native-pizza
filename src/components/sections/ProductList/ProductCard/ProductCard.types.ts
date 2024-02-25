export type Product = {
    id: number;
    title: string;
    description: string;
    ingredients: string;
    price: {
        new: number | null;
        old: number;
    },
    isNew: boolean;
    image: string;
};