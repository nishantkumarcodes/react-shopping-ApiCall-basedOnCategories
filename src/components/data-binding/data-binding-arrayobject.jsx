
// Array Object types in React are used to represent simple values such as numbers, strings, and booleans. In this example, we are using primitive types to display product details.
export function DataBinding() {

    // This is Array of Object
    var catpgoriesas = [
        { name: "Electronics", price: 1000, stock: true },
        { name: "Clothing", price: 500, stock: false },
        { name: "Books", price: 200, stock: true },
        { name: "Sports", price: 1500, stock: false },
        { name: "Cycle", price: 1000, stock: true }
    ]

    return (
        <div className="container">
            <h2>Product Categories</h2>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        catpgoriesas.map((cat) => {
                            return <tr key={cat.name}>
                                <td>{cat.name}</td>
                                <td>${cat.price.toFixed(2)}</td>
                                <td>{cat.stock ? "In Stock" : "Out of Stock"}</td>
                                <td><button className="btn btn-danger"><span className="bi bi-trash-fill"></span></button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}