const data = [
    { month: 'Jan', high: 14.7, low: 5.6 },
    { month: 'Feb', high: 16.5, low: 6.6 },
    { month: 'Mar', high: 18.6, low: 7.3 },
    { month: 'Apr', high: 20.8, low: 8.1 },
    { month: 'May', high: 23.3, low: 9.9 },
    { month: 'Jun', high: 26.2, low: 11.9 },
    { month: 'Jul', high: 27.7, low: 13.3 },
    { month: 'Aug', high: 27.6, low: 13.2 },
    { month: 'Sep', high: 26.4, low: 12.1 },
    { month: 'Oct', high: 23.6, low: 9.9 },
    { month: 'Nov', high: 17, low: 6.8 },
    { month: 'Dec', high: 14.7, low: 5.8 }
];

let counter = 0;

export default function createData() {
    const result = [],
        temp = 15,
        min = counter % 2 === 1 ? 0 : temp;

    for (let i = 0; i < data.length; i++) {
        result.push({
            month: data[i].month,
            high: min + temp + Math.random() * temp,
            low: min + Math.random() * temp
        });
    }
    counter++;

    return result;
};
