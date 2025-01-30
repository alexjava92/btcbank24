export const formatNumber = (num: number | string): string => {
    if (typeof num === 'string') {
        num = parseFloat(num);
    }
    return num.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
};
