import React from 'react'
import Link from "next/link";
export const metadata = {
  title: "About",
  description: "About Page",
};
export default function Aboutlayout({children}) {
  return (
    <div className='mt-10'>
             <nav>
          <ul className="flex gap-6">
            <li><Link href="/about/mission">mission</Link></li>
          </ul>
        </nav>
        {children}
     </div>
  )
}
