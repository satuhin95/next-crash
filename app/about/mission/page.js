import Image from 'next/image'
import React from 'react'
import thumb from "@/public/img.png"

function Mission() {
  return (
    <main className='mt-10'>
      <div>Mission</div>
      <div className='w-[200px]'>

      <Image src={thumb} alt='img' quality={100} placeholder='blur'/>
      </div>
    
    </main>
  )
}

export default Mission