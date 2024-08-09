import ProductItem from "./product-item";

export default function ProductListContainer({products, filterText, inStockOnly}) {

    const rows = [];

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
              filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        rows.push(
            <ProductItem
                product={product}
                key={product.name} 
            />
        );
    });

    return (
        <ul role="list" className="divide-y divide-gray-100 mx-auto">
            {rows}
        </ul>
      );

}