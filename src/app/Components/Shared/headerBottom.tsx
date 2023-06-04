import { Copyright } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HeaderBottom() {
  return (
    <div className=' shadow-inner shadow-red-950'> <div className="border-b-2 w-screen border-gray-800 mt-10 sm:mt-32"></div>
    <div className="flex items-center text-teal-400 text:lg sm:text-xl font-bold justify-around">
 <div className="inline-flex"><h3>Copyright<span><Copyright/></span><span className="text-black hidden sm:block font-bold">  Dentistry Decoded</span></h3></div>
 <div className="hidden sm:block"><h3>Design by:<span className="text-black font-extrabold p-3"> Panacloud</span></h3></div>
 <div><h3>Code by: <Link href={"https://drahmed.vercel.app/"} className="hover:bg-fuchsia-300 bg-fuchsia-100 rounded-full p-3 font-bold text-blue-950 hover:underline hover:scale-110 duration-300">Dr. Ahmed</Link></h3></div>
    </div></div>
  )
}

export default HeaderBottom