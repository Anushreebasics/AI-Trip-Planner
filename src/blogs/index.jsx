import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'


function Blogs() {
  return (
    <div>
        <div className='mt-10 mb-20'>
            <img src="/blogsland.jpg" className='w-[1800px]'/>
            <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5'>
                <Link to={'https://theworldtravelguy.com/fulidhoo-island-maldives/'}>
                <div className=''>
                    <img src="/blog1.jpg" className="rounded-xl hover:scale-110 transition-all cursor-pointer"/>
                    <p className='mt-4 text-center font-thin text-red-500'>Asia 🔸 Beaches 🔸 Maldives 🔸 Wildlife</p>
                    <p className='mt-3 font-bold text-center hover:text-gray-500'>Fulidhoo Island Guide: Shark & Stingary Beach In Maldives</p>
                    <Button className="mt-3 bg-red-500 text-center sm:ml-20 md:ml-40 hover:scale-110 transition-all cursor-pointer">Read More</Button>
                </div>
                </Link>

                <Link to={'https://theworldtravelguy.com/dhigurah-island-maldives/'}>
                <div className=''>
                    <img src="/blog6.jpg" className="rounded-xl hover:scale-110 transition-all cursor-pointer"/>
                    <p className='mt-4 text-center font-thin text-red-500'>Asia 🔸 Beaches 🔸 Maldives</p>
                    <p className='mt-3 font-bold text-center hover:text-gray-500'>How to Visit Dhigurah Island: Budget Paradise</p>
                    <Button className="mt-8 bg-red-500 text-center sm:ml-20 md:ml-40 hover:scale-110 transition-all cursor-pointer">Read More</Button>
                </div>
                </Link>

                <Link to={'https://theworldtravelguy.com/sanur-travel-guide-best-things-to-do-in-sanur-bali-beach/'}>
                <div className=''>
                    <img src="/blog4.jpg" className="rounded-xl hover:scale-110 transition-all cursor-pointer"/>
                    <p className='mt-4 text-center font-thin text-red-500'>Asia 🔸 Bali 🔸 Beaches 🔸 Sunrises</p>
                    <p className='mt-3 font-bold text-center hover:text-gray-500'>Sanur Bali Travel Guide: 24 Best Things To Do</p>
                    <Button className="mt-8 bg-red-500 text-center sm:ml-20 md:ml-40 hover:scale-110 transition-all cursor-pointer">Read More</Button>
                </div>
                </Link>

                <Link to={'https://theworldtravelguy.com/lower-antelope-canyon/'}>
                <div className=''>
                    <img src="/blog3.jpg" className="rounded-xl hover:scale-110 transition-all cursor-pointer"/>
                    <p className='mt-9 text-center font-thin text-red-500'>Arizona 🔸 US 🔸 Slot Canyons</p>
                    <p className='mt-3 font-bold text-center hover:text-gray-500'>Lower Antelope Canyon Tour Review & Photos</p>
                    <Button className="mt-8 bg-red-500 text-center sm:ml-20 md:ml-40 hover:scale-110 transition-all cursor-pointer">Read More</Button>
                </div>
                </Link>

                <Link to={'https://theworldtravelguy.com/beautiful-indonesia-beaches-the-best-beaches-in-indonesia/'}>
                <div className=''>
                    <img src="/blog2.jpg" className="rounded-xl hover:scale-110 transition-all cursor-pointer"/>
                    <p className='mt-4 text-center font-thin text-red-500'>Bali 🔸 Beaches 🔸 Flores 🔸 BucketList</p>
                    <p className='mt-3 font-bold text-center hover:text-gray-500'>25 Most Beautiful Beaches In Indonesia</p>
                    <Button className="mt-8 bg-red-500 text-center sm:ml-20 md:ml-40 hover:scale-110 transition-all cursor-pointer">Read More</Button>
                </div>
                </Link>

                <Link to={'https://theworldtravelguy.com/bhutan-travel-itinerary/'}>
                <div className=''>
                    <img src="/blog5.jpg" className="rounded-xl hover:scale-110 transition-all cursor-pointer"/>
                    <p className='mt-4 text-center font-thin text-red-500'>Bhutan 🔸 Temples 🔸 Itineraries</p>
                    <p className='mt-3 font-bold text-center hover:text-gray-500'>7 Days In Bhutan Travel Itinerary: Best Things To Do and See</p>
                    <Button className="mt-3 bg-red-500 text-center sm:ml-20 md:ml-40 hover:scale-110 transition-all cursor-pointer">Read More</Button>
                </div>
                </Link>

            </div>
            
        </div>
      
    </div>
  )
}

export default Blogs
