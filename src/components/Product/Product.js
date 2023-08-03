import React from 'react'
import './Product.css'
import MainProduct from './MainProduct'
import DetailProduct from './DetailProduct'
import ServiceDetail from './ServiceDetail'
import ProductFooter from './ProductFooter'

export default function Product() {
    return (
        <div>
            <MainProduct/>
            <DetailProduct/>
            <ServiceDetail/>
            <ProductFooter/>
        </div>
    )
}
