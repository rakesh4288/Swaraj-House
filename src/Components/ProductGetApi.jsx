import { useEffect, useState } from "react";

const ProductGetApi = () => {
    const [productsData, setProductsData] = useState([]);
    const [apiError, setApiError] = useState('');
    const url = "https://dummyjson.com/products";

    useEffect(() => {
        const fetchAllProduct = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (result?.products) {
                    // Add cart tracking properties to each product
                    const productsWithCart = result.products.map(product => ({
                        ...product,
                        isAddedToCart: false,
                        cartQuantity: 0,
                        originalStock: product.stock
                    }));
                    console.log('api result =', productsWithCart);
                    setProductsData(productsWithCart);
                }
            }
            catch (error) {
                setApiError(error);
            }
        }
        fetchAllProduct();
    }, []);

    const handleAddToCart = (id) => {
        setProductsData(prevState => prevState.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isAddedToCart: true,
                    cartQuantity: 1,
                    stock: item.originalStock - 1
                }
            }
            return item;
        }));
    }

    const handleCartDecrement = (id) => {
        setProductsData(prevState => prevState.map((item) => {
            if (item.id === id && item.cartQuantity > 0) {
                return {
                    ...item,
                    cartQuantity: item.cartQuantity - 1,
                    stock: item.originalStock - (item.cartQuantity - 1)
                }
            }
            return item;
        }));
    }

    const handleCartIncrement = (id) => {
        setProductsData(prevState => prevState.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    cartQuantity: item.cartQuantity + 1,
                    stock: item.originalStock - (item.cartQuantity + 1)
                }
            }
            return item;
        }));
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h4>Products Dummy API calling using http get method:</h4>

                    {productsData && productsData.length > 0 ? (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Title</td>
                                    <td>Brand</td>
                                    <td>Category</td>
                                    <td>Price</td>
                                    <td>Stock</td>
                                    <td>Availability Status</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </thead>

                            <tbody>
                                {productsData.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price}</td>
                                            <td>{item.stock}</td>
                                            <td>{item.availabilityStatus}</td>
                                            <td>
                                                {!item.isAddedToCart ? (
                                                    <button className="btn btn-success btn-sm" onClick={() => handleAddToCart(item.id)}>
                                                        Add to Cart
                                                    </button>
                                                ) : (
                                                    <div id="quantity-counter" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <i 
                                                            className="bi bi-dash-circle" 
                                                            style={{ fontSize: '1.2rem', cursor: 'pointer', color: '#dc3545' }} 
                                                            onClick={() => handleCartDecrement(item.id)}
                                                        ></i>
                                                        <span style={{ fontSize: '1rem', minWidth: '30px', textAlign: 'center', fontWeight: 'bold' }}>
                                                            {item.cartQuantity}
                                                        </span>
                                                        <i 
                                                            className="bi bi-plus-circle" 
                                                            style={{ fontSize: '1.2rem', cursor: 'pointer', color: '#28a745' }} 
                                                            onClick={() => handleCartIncrement(item.id)}
                                                        ></i>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    ) : (<div className="alert alert-danger"> Products Not Found </div>)}
                    {apiError && (
                        <div>{apiError}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductGetApi;