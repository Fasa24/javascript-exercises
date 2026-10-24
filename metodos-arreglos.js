const datos = [
    { id: 1, name: "Classic Moussaka", price: 15, preparationTime: 30, available: true },
    { id: 2, name: "Chicken Souvlaki", price: 14, preparationTime: 20, available: true },
    { id: 3, name: "Baklava", price: 7, preparationTime: 15, available: false },
    { id: 4, name: "Greek Salad", price: 10, preparationTime: 10, available: true },
    { id: 5, name: "Seafood Gyro", price: 16, preparationTime: 25, available: true }
];

const filtrados = datos.filter(item => (item?.available ?? false));
const total = datos.reduce((acc, { price }) => acc + price, 0);
const promedio = total / datos.length;
const ordenados = [...datos].sort((a, b) => a.price - b.price);

console.log({ filtrados, total, promedio, ordenados });
console.log("Arreglo Original:", datos);