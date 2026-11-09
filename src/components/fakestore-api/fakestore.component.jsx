import './fakestore.component.css';
import { useEffect, useState } from 'react';

export function FakestoreComponent() {

    const [Categories, setCategories] = useState([]);
    const [Products, setProducts] = useState([]);

    function getCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.unshift("All");
                setCategories(data);
            })
            .catch(error => {
                console.error("Error fetching data from Fakestore API:", error);
            });
    }

    function loadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                setProducts(data);
            })
            .catch(error => {
                console.error("Error fetching products from Fakestore API:", error);
            });
    }

    function handleCategoryChange(event) {
        const selectedCategory = event.target.value;    

        if (selectedCategory === "All") {
            loadProducts("https://fakestoreapi.com/products");
        }   else {
            loadProducts(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        }   
    }

    useEffect(() => {
        getCategories();
        loadProducts("https://fakestoreapi.com/products");
    }, []);

    return (
        <div className="container">
            <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                <div><h2>FakeStore</h2></div>
                <div>
                    <span className='me-4'>Home</span>
                    <span className='me-4'>Electronics</span>
                    <span className='me-4'>Jewellery</span>
                    <span className='me-4'>Men's Fashion</span>
                    <span className='me-4'>Women's Fashion</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-cart me-3"></span>
                </div>
            </header>

            <section className="row mt-4">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select category</label>
                        <div>
                            <select onChange={handleCategoryChange} className='form-select'>
                                {
                                    Categories.map(category => (
                                        <option key={category} value={category}>{category.toUpperCase()}</option>
                                    ))
                                }
                                        
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        Products.map(product => (
                            <div key={product.id} className="card m-2 P-2"> 
                                <img src={product.image} className="card-img-top" height="150" />
                                <div className="card-header">
                                    <p className="card-title">{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Title</dt>
                                        <dd>{product.title}</dd>
                                        <dt>Price</dt>  
                                        <dd>${product.price}</dd>
                                        <dt>Category</dt>
                                        <dd>{product.category}</dd>
                                        <dt>Rating</dt>
                                        <dd><span className="bi bi-star-fill text-success"></span> {product.rating.rate} ({product.rating.count} reviews)</dd>  
                                    </dl>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-primary w-100'><span className='bi bi-cart4'></span>Add to Cart</button>
                                    <button className='btn btn-outline-primary w-100'>View Details</button>
                                </div>
                            </div>
                        ))
                    }
                </main>
            </section>
        </div>
    )
}