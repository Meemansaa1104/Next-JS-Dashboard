import Footer from '@/app/components/footer/footer'
import Tools from '@/app/components/tools/tools'
import TransactionTable from '@/app/components/transaction/tansaction'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='overflow-hidden'>
      <Tools />
      <TransactionTable />
      <Footer />
    </div>
  )
}

export default ProductsPage