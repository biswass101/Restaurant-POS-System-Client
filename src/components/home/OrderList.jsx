import React from 'react'

const OrderList = () => {
  return (
    <div className='flex itmes-center gap-6'>
        <button className='bg-[#f6b100] p-3 text-xl font-bold text-[#f5f5f5]'>AM</button>
        <div>
            <div>
                <h1>Niloy Bis</h1>
                <p>8 Items</p>
            </div>
            <div>
                <p>Ready</p>
                <p>Ready to serve</p>
            </div>
        </div>
    </div>
  )
}

export default OrderList