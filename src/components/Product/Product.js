import React from 'react'
import MainProduct from './MainProduct'
import DetailProduct from './DetailProduct'
import ServiceDetail from './ServiceDetail'
import ProductFooter from './ProductFooter'
import Menu from '../Home/Menu'

export default function Product() {
    return (
        <div>
            <Menu/>
            <MainProduct/>
            <DetailProduct/>
            <ServiceDetail/>
            <ProductFooter/>
        </div>
    )
}
