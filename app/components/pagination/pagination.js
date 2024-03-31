import React from 'react';

const Pagination = () => {
  return (
    <div className='p-2 flex justify-between'>
      <button className='p-2 cursor-not-allowed bg-slate-900'>Preview</button>
      <button className='p-2 cursor-pointer bg-blue-600'>Next</button>
    </div>
  )
}

export default Pagination