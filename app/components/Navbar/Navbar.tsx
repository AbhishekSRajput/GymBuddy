import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

const Navbar = () => {
    return (
        <Disclosure as="nav" className="navbar">
            <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
                <div className="relative flex h-12 sm:h-20 items-center">
                    <div className="flex flex-1 items-center sm:justify-between">
                        <div className="sm:flex flex-shrink-0 items-center border-right">
                            <Link href="/" className='text-4xl font-semibold text-black ml-4'>
                                Gym <span style={{ color: '#03b383' }}>Buddy</span>
                            </Link>
                        </div>
                        <div className='gap-6 hidden lg:flex'>
                            <div className='flex items-center gap-2'>
                                <Image src={'/images/Navbar/phone.svg'} alt="phone-image" width={19} height={19} />
                                <p className='text-lg font-medium'>+91(899) 924-1433</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>

    )
}

export default Navbar;
