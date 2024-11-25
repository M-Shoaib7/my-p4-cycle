import React from "react";

const Products = () => {

    const productsData = [
       {id: 1,name: "Trek",description: "A road bike with a frame made of carbon fiber.",price: 4000,Image:'/p2.jpg'},
       {id: 2,name: "Giant",description: "A best bike for road cycling.",price: 4999,Image:'/p4.jpg'},
       {id: 3,name: "Cannondale",description: "A road bike with a frame made of carbon fork.",price: 4599,Image:'/p6.jpg'},
       {id: 4,name: "Scott",description: "A Luxury bike for off road riding.",price: 4999,Image:'/p3.jpg'},
       {id: 5,name: "Kona",description: "A best for best health.",price: 4899,Image:'/p5.jpg'},
       {id: 6,name: "Orbea",description: "A best bike for road cycling.",price: 4399,Image:'/p7.jpg'},
    ];

    return (
        <div className="products"> <h1 className="fade-in" id="heading">Our Best Bikes</h1>
            <div className="product-list">
                {productsData.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.Image} alt={product.name} className="product-image"/>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;