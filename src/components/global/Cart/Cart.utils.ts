export const getTotalItemsCount = (itemsObject: {}) => {
    return Object.values(itemsObject).flat().length;
};

export const getTotalItemsPrice = (itemsObject: {}) => {
    return Object.values(itemsObject)
        .flat()
        .reduce((sum, item: any) => sum + item.price, 0);
};

export const normalizeCartItemsData = (source) => {
    const items = [];

    for (let array in source) {
        // @ts-ignore
        source[array].forEach((item: any) => {
            for (let obj of items) {
                if (item.id === obj.id) {
                    return;
                }
            }
            items.push(item);
        });
    }

    return items;
};