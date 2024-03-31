import Pagination from '@/app/components/pagination/pagination';
import Searchbar from '@/app/components/search/search';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const usersPage = () => {

  return (
    <div className='bg-gray-950 p-4 rounded-xl mt-4'>
      <div className='flex items-center justify-between'>
        <Searchbar placeholder="Search for user..." />
        <Link href="/dashboard/users/add">
          <button className='p-2 bg-cyan-600 text-white border-none rounded-xl cursor-pointer hover:bg-cyan-800'>Add New</button>
        </Link>
      </div>
      <table className='w-full mt-3'>
        <thead className='bg-gray-800 rounded-xl'>
          <tr>
            <td className='p-3 rounded-l-xl'>Name</td>
            <td className='p-3'>Email</td>
            <td className='p-3'>Created</td>
            <td className='p-3'>Role</td>
            <td className='p-3'>Status</td>
            <td className='p-3 rounded-r-xl'>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2'>
              <div className='flex items-center gap-1'>
                <Image src="/userimage.jpg" alt="User"
                  width={40} height={40}
                  className='rounded-full object-cover' />
                Meemansaa Dewangan
              </div>
            </td>
            <td className='p-2'>meemansaa11900@gmail.com</td>
            <td className='p-2'>28.03.2024</td>
            <td className='p-2'>Admin</td>
            <td className='p-2'>active</td>
            <td className='p-2'>
              <div className='flex gap-2'>
                <Link href="/">
                  <button className='p-2 rounded-xl text-white cursor-pointer bg-green-600'>View</button>
                </Link>
                <button className='p-2 rounded-xl text-white cursor-pointer bg-red-600'>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default usersPage