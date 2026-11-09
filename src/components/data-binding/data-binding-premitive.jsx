
// Premitive types in React are used to represent simple values such as numbers, strings, and booleans. In this example, we are using primitive types to display product details.
export function DataBinding() {
    var id=1;
    var name="Samsung";
    var price=500;
    var stock=true;
    return (
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{id}</dd>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Product Price</dt>
                <dd>{price}</dd>
                <dt>Product Stock</dt>
                <dd>{stock ? "In Stock" : "Out of Stock"}</dd>
            </dl>
        </div>
    )
}