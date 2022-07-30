import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Skeleton from "react-loading-skeleton";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
        <>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
        </>
    );
  };

  const filterProduct = (cat) =>{
        const updatedList = data.filter((x)=>x.category === cat)
        setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons container d-flex justify-content-center ">
          <div className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelry</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 mt-4">
                <Card className="h-100 text-center p-4" key={product.id}>
                  <Card.Img variant="top" src={product.image} alt={product.title} height='250px'/>
                  <Card.Body>
                    <Card.Title className="mb-0">{product.title.substring(0,12)}...</Card.Title>
                    <Card.Text className="lead fw-bold">
                      {product.price} $
                    </Card.Text>
                    <Button className=" btn-light btn-outline-dark">Buy now</Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
