
// Array Object types in React are used to represent simple values such as numbers, strings, and booleans. In this example, we are using primitive types to display product details.
export function DataBinding() {

    // This is Array of Object iteration
    var menu = [
        { category: "Electronics", products: ["Mobiles", "Television"] },
        { category: "Clothing", products: ["Shirts", "Jeans"] },
        { category: "Books", products: ["Fiction", "Non-Fiction"] },
        { category: "Sports", products: ["Football", "Basketball"] },
        { category: "Cycle", products: ["Mountain Bike", "Road Bike"] }
    ]

    var menucom = [
        { category: "Electronics", products: [{ name: "Laptop", price: 1000, stock: true }, { name: "Mobile", price: 500, stock: false }] },
        { category: "Clothing", products: [{ name: "Shirt", price: 200, stock: true }, { name: "Jeans", price: 150, stock: false }] },
        { category: "Books", products: [{ name: "Fiction", price: 20, stock: true }, { name: "Non-Fiction", price: 30, stock: false }] },
        { category: "Sports", products: [{ name: "Football", price: 50, stock: true }, { name: "Basketball", price: 60, stock: false }] },
        { category: "Cycle", products: [{ name: "Mountain Bike", price: 1000, stock: true }, { name: "Road Bike", price: 1200, stock: false }] }
    ]

    return (
        <div className="container">

            {/* Part 1: Array of Object Iteration */}
            <h2>Product Categories</h2>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map((cat) => {
                            return <tr key={cat.category}>
                                <td>{cat.category}</td>
                                <td>{cat.products.join(", ")}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


            {/* Part 2: Array of Object Iteration with Nested Array of Object */}
            <h2>Product Categories</h2>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Products</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        menucom.map((cat) => {
                            return (
                                <tr key={cat.category}>
                                    <td>{cat.category}</td>
                                    <td>
                                        <ul>
                                            {
                                                cat.products.map((prod) => {
                                                    return (
                                                        <li key={prod.name}>
                                                            {prod.name} - ${prod.price.toFixed(2)} -
                                                            {prod.stock ? "In Stock" : "Out of Stock"}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


            {/* Part 3: Array of Object Iteration with Nested Array of Object in List */}
            <h2>Product Categories</h2>
            <ol>
                {
                    menu.map((cat) => {
                        return (
                            <li key={cat.category}>
                                {cat.category}

                                <ul>
                                    {
                                        cat.products.map((prod) => {
                                            return <li key={prod}>{prod}</li>
                                        })
                                    }
                                </ul>

                            </li>
                        )
                    })
                }
            </ol>

            <hr />


            {/* Part 4: Nested Array in Grouped Dropdown */}

            <h2>Product Categories</h2>

            <select className="form-select">
                {
                    menu.map((cat) => {
                        return (
                            <optgroup label={cat.category} key={cat.category}>
                                {
                                    cat.products.map((prod) => {
                                        return <option key={prod} value={prod}>{prod}</option>
                                    })
                                }
                            </optgroup>
                        )
                    })
                }
            </select>

            <hr />

            {/* Part 5: Nested Array in Grouped Dropdown */}
            <h2>Product Categories</h2>

            <select
                className="form-select"
                onChange={(e) => console.log("Selected Product:", e.target.value)}
            >
                {
                    menu.map((cat) => (
                        <optgroup label={cat.category} key={cat.category}>
                            {
                                cat.products.map((prod) => (
                                    <option key={prod} value={prod}>
                                        {prod}
                                    </option>
                                ))
                            }
                        </optgroup>
                    ))
                }
            </select>

        </div>
    )
}