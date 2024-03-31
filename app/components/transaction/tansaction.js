import Image from 'next/image'
import React from 'react'

const TransactionTable = () => {
    return (
        <div className='bg-slate-900 p-4 mt-3 rounded-xl'>
            <table className='w-full'>
                <thead className='bg-slate-800'>
                    <tr className=''>
                        <td className='p-4 rounded-l-xl'>Brands</td>
                        <td className='p-4'>Description</td>
                        <td className='p-4'>Categories</td>
                        <td className='p-4'>Tags</td>
                        <td className='p-4 rounded-r-xl'>Next Meeting</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/amazon.jpeg"
                                    alt='Amazon'
                                    width={40}
                                    height={40} />
                                <span>Amazon</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>online retailer and web service provider</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-red-800'>Ecommerce</span>
                        </td>
                        <td className='p-3'>
                            <span>#amazonLove</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>Monday</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/flipkart.jpeg"
                                    alt='flipkart'
                                    width={40}
                                    height={40} />
                                <span>Filpkart</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>online shopping website</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-blue-800'>Ecommerce</span>
                        </td>
                        <td className='p-3'>
                            <span>#filpkartLove</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>Friday</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/hotstar.jpeg"
                                    alt='Amazon'
                                    width={40}
                                    height={40} />
                                <span>Hotstar</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>Hot Content Catalogue</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-800'>Popular Genres</span>
                        </td>
                        <td className='p-3'>
                            <span>#disneyHotstar</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>4 pm</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/hplogo.jpeg"
                                    alt='HP'
                                    width={40}
                                    height={40} />
                                <span>HP</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>HP is a brand</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-yellow-800'>Ecommerce</span>
                        </td>
                        <td className='p-3'>
                            <span>#HPLove</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>in 20 mint</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/paytm.jpeg"
                                    alt='paytm'
                                    width={40}
                                    height={40} />
                                <span>paytm</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>Paytm (an acronym for "pay through mobile") </span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-pink-800'>Payment</span>
                        </td>
                        <td className='p-3'>
                            <span>#paytmLove</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>Tuesday</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/Whatsapp.jpeg"
                                    alt='Whatsapp'
                                    width={40}
                                    height={40} />
                                <span>Whatsapp</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>Online onnecting app</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-red-800'>Social media</span>
                        </td>
                        <td className='p-3'>
                            <span>#whatsappme</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>in 30 mint</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-2 items-center'>
                                <Image className='rounded-full' src="/zomato.jpeg"
                                    alt='Zomato'
                                    width={40}
                                    height={40} />
                                <span>Zomato</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <span>Food delivery app</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-blue-800'>Food</span>
                        </td>
                        <td className='p-3'>
                            <span>#ZomatoLove</span>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-xl text-sm p-1 bg-green-600 bg-opacity-20'>Tonight</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable