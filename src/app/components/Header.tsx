import React from 'react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-200 to-emerald-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        {/*logo*/}
        <Link href='/' className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-400 drop-shadow-md group-hover:from-cyan-50 group-hover:to-cyan-300">
            Bit
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-800 drop-shadow-md group-hover:from-sky-400 group-hover:to-sky-700">
            Othies
          </span>
        </Link>

        {/* navigation menu */}
        <nav>
         <ul className='flex gap-4'>
           <Link href='/'>Home</Link>
           <Link href='/'>About</Link>
           <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
         </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header