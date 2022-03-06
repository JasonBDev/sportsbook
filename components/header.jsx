import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {

    const [menu, setMenu] = useState(false);
    const router = useRouter();

    return (
        <header className="z-50 w-full py-4 bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl px-4">
                <Link href="/" title="Kutty Home Page" className="flex items-center">
                    <h1 className='text-2xl font-extrabold text-gray-900 cursor-pointer'>Sportsbook</h1>
                </Link>
                <div className="flex items-center space-x-1">
                    <div className="hidden space-x-5 md:inline-flex">
                        <button onClick={() => router.push('/articles')} className={"btn btn-sm btn-link hover:text-blue-700 " + (router.pathname.includes('/articles') ? 'text-blue-700' : '')}>Articles</button>
                        <button onClick={() => router.push('/reviews')} className={"btn btn-sm btn-link hover:text-blue-700 " + (router.pathname.includes('/reviews') ? 'text-blue-700' : '')}>Reviews</button>
                        <button onClick={() => router.push('/contact')} className={"btn btn-sm btn-link hover:text-blue-700 " + (router.pathname.includes('/contact') ? 'text-blue-700' : '')}>Contact</button>
                    </div>
                    <div className="flex items-center md:hidden">
                        <div className="w-full flex justify-between">
                            <button onClick={() => setMenu(true)} className="flex-none text-gray-800 -mr-1" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <AnimatePresence>
                            {menu &&
                                <motion.div
                                    initial={{opacity: 0, height: '0px'}}
                                    animate={{opacity: 1, height: '260px'}}
                                    exit={{opacity: 0, height: '0px'}}
                                    transition={{duration: 0.2}}
                                    className="absolute top-0 left-0 right-0 z-10 flex flex-col items-start p-4 pt-4 pb-4 space-y-3 bg-white rounded shadow-md overflow-hidden" x-cloak>
                                    <div className="flex justify-between w-full">
                                        <h1 className='text-2xl font-extrabold text-gray-800 cursor-pointer'>Sportsbook</h1>
                                        <button onClick={() => setMenu(false)} className="self-end flex-none ml-2 btn btn-link btn-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 -mr-1 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>

                                    <button onClick={() => { router.push('/articles'); setMenu(false); }} className={"w-full text-left hover:text-blue-700 h-20 " + (router.pathname.includes('/articles') ? 'text-blue-700' : '')}>Articles</button>
                                    <button onClick={() => { router.push('/reviews'); setMenu(false); }} className={"w-full text-left hover:text-blue-700 h-20 " + (router.pathname.includes('/reviews') ? 'text-blue-700' : '')}>Reviews</button>
                                    <button onClick={() => { router.push('/contact'); setMenu(false); }} className={"w-full text-left hover:text-blue-700 h-20 " + (router.pathname.includes('/contact') ? 'text-blue-700' : '')}>Contact</button>
                                </motion.div>
                            }

                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    )
}