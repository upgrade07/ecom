import React,{useState,useEffect} from 'react'
import { NavLink , useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { useSelector,useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
const Product = () => {

    const {id} = useParams();
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) =>{
        dispatch(addCart(product))
    }

    useEffect(()=>{
        const getProduct = async() =>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false);
        }
        getProduct()
    },[])
    const Loading = () =>{
        return(
            <>
                <div className='col-md-6'>
                    <Skeleton height={400}/>
                </div>
                <div className='col-md-6'>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                </div>
            </>
        )
    }

    const ShowProduct = () =>{
        return(
            <>
                <div className='mt-5 col-md-6'>
                    <img src={product.image} height='400px' width='400px'></img>

                </div>
                <div className='mt-5 col-md-6 mb-4'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1>{product.title}</h1>
                    <p className='lead fw-bolder '> 
                    Rating {product.rating && product.rating.rate}
                    
                    <i className='ml-10 fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>{product.description}...</p>
                    <button onClick={()=>addProduct(product)} className='btn btn-outline-dark px-4 py-2'>
                        Add to Cart 
                    </button>
                    <NavLink to='/cart' className='btn btn-dark mx-2 px-4 py-2'>
                    Go to Cart
                    </NavLink>                
                    </div>
            </>
        )
    }
  return (
    <div>
      <div className='container py-5'>
        <div className='row py-5'>
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
