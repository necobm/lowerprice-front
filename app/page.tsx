import * as React from 'react';
import ProductList from './product-list';

const PRODUCTS = [
    {id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple", groceryStore: "Mercadona"},
    {id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit", groceryStore: "Carrefour"},
    {id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit", groceryStore: "Mercadona"},
    {id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach", groceryStore: "Alcampo"},
    {id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin", groceryStore: "Mercadona"},
    {id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas", groceryStore: "Mercadona"}
];

export default function Page() {
    return (
        <>
        <ProductList products={PRODUCTS} />
        </>
    )
}