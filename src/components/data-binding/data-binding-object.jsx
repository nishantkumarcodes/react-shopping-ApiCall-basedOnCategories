
// JSON Object types in React are used to represent simple values such as numbers, strings, and booleans. In this example, we are using primitive types to display product details.
export function DataBinding() {

    var product={
        id:1,
        name:"Samsung",
        price:500,
        stock:true
    }

    return (
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{product.id}</dd>
                <dt>Product Name</dt>
                <dd>{product.name}</dd>
                <dt>Product Price</dt>
                <dd>{product.price}</dd>
                <dt>Product Stock</dt>
                <dd>{product.stock ? "In Stock" : "Out of Stock"}</dd>
            </dl>
        </div>
    )
}