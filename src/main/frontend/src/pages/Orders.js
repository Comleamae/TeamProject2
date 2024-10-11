import React from 'react'
import './Orders.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Orders = () => {

  const navigate = useNavigate()

  return (
    <div className='order-main'>
      <div>  
        <h3>수주 관리</h3>
        <div>
          <p>
            <span onClick={(e)=>{navigate(`/orders`)}}>거래처 관리</span>
          </p>
          <p>
            <span onClick={(e)=>{navigate(`/orders/item`)}}>제품 관리</span>
          </p>    
          <p>
            <span onClick={(e)=>{navigate(`/orders/ordering`)}}>주문서 관리</span>
          </p>
        </div>
        <h3>사후 관리</h3>
        <div>
          <p>
            <span onClick={(e)=>{navigate(`/orders/sales`)}}>매출</span>
          </p>
          <p>
            <span onClick={(e)=>{navigate(`/orders/requires`)}}>자사 재고 발주</span>
          </p>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Orders
