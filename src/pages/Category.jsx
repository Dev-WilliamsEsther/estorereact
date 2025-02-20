import React from 'react'
import '../styles/category.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import ProductDatas from '../productdata/Product.json'


const Category = () => {
  return (
    <div className='catewrap'>
        <div className='catyimgwrap'>
            <div className='catyimg'>
            <h1>Product Category</h1>
            </div>

            <div className='featuresholder'>
                <div className='features'>
                    <a>All</a>
                    <a>New</a>
                    <a>Featured</a>
                    <a>Offer</a>
                </div>
                <div className='features1'>
                    <a>Short by:Frequency <RiArrowDropDownLine /></a>
                </div>
            </div>
        </div>
        <div className='catyimages'>
        {
                ProductDatas.map((product)=>(
                    <div className='imgcontainer' key={product.id}>
                        <img src={product.image} />
                        <p className='textcontainer'>{product.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category