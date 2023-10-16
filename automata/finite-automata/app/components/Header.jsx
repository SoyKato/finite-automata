import { Libre_Barcode_39_Extended } from 'next/font/google'
import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='p-8 bg-slate-400'>
        <div className='py-5 text-center text-white'>
          <Link href={'/'}>Automatas Finitos Deterministas</Link>
        </div>

        <nav>
            <ul className='flex justify-evenly uppercase'>
              <li className='hover:text-white' >
              <Link href={'/ejercicio01'}>Ejercicio 1</Link>
              </li>

              <li className='hover:text-white' >
              <Link href={'/ejercicio02'}>Ejercicio 2</Link>
              </li>

              <li className='hover:text-white' >
              <Link href={'/ejercicio03'}>Ejercicio 3</Link>
              </li>

              <li className='hover:text-white' >
              <Link href={'/ejercicio04'}>Ejercicio 4</Link>
              </li>
            </ul>
        </nav>
    </header>
  )
}
