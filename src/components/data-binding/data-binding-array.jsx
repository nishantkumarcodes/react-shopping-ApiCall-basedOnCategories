
// Array Object types in React are used to represent simple values such as numbers, strings, and booleans. In this example, we are using primitive types to display product details.
export function DataBinding() {

    // This is Array of Object
    var catpgoriesas = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Clothing" },
        { id: 3, name: "Books" },
        { id: 4, name: "Sports" },
        { id: 5, name: "Electronics" }
    ]

    // This is Array
    var catpgories = [
        "Electronics", "Clothing", "Books", "Sports", "Electronics"
    ]

    return (
        <div className="container">
            <h2>Product Categories</h2>

            <ul className="list-unstyled">
                {
                    catpgoriesas.map((cat) => {
                        return <li key={cat.id}><a href={`/products/${cat.id}`}>{cat.name}</a></li>
                    })
                }
            </ul>

            <div>
                {
                    catpgories.map((cat, index) => {
                        return <span key={index} className="badge bg-primary m-1">{cat}</span>
                    })
                }
            </div>

            <div>
                {
                    catpgoriesas.map((cat, index) => {
                        return <button key={index} className="btn btn-primary m-1">{cat.name}</button>
                    })
                }
            </div>

            <ul className="list-unstyled">
                {
                    catpgories.map((cat, index) => {
                        return <li key={index}><input type="checkbox" /> {cat}</li>
                    })
                }
            </ul>

            <ol>
                {
                    catpgories.map((cat, index) => {
                        return <li key={index}>{cat}</li>
                    })
                }
            </ol>

            <select>
                {
                    catpgoriesas.map((cat, index) => {
                        return <option key={index} value={cat.id}>{cat.name}</option>
                    })
                }
            </select>

            <select>
                {
                    catpgoriesas.map((cat, index) => {
                        return <option key={index}>{cat.name}</option>
                    })
                }
            </select>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        catpgoriesas.map((cat, index) => {
                            return <tr key={index}>
                                <td>{cat.id}</td>
                                <td>{cat.name}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}