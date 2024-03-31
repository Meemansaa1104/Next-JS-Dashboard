import React from 'react'
import Tools from '../components/tools/tools'
import TransactionTable from '../components/transaction/tansaction'
import Footer from '../components/footer/footer'

const Dashboard = () => {
  return (
    <div>
      <div className='overflow-hidden'>
        <Tools />
        <TransactionTable />
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard