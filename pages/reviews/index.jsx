import { useRouter } from 'next/router'
import BetSiteReview from '../../components/BetSiteReview';
import { AnimatePresence, motion } from 'framer-motion';

export default function Reviews() {

    const router = useRouter();

    return (
        <section className="px-4 py-12 md:py-24 mx-auto max-w-7xl">

            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Sportsbook Reviews</h2>
            <p className="mb-20 text-lg text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-8">

                        <BetSiteReview rating={'4.9'} ranking={'1'} />
                        <BetSiteReview rating={'4.7'} ranking={'2'} />
                        <BetSiteReview rating={'4.4'} ranking={'3'} />
                        <BetSiteReview rating={'4.3'} ranking={'4'} />
                        <BetSiteReview rating={'4.1'} ranking={'5'} />

                    </div>
                </div>
            </section>


            <div className="flex justify-center w-full mt-10">
                <a href="#" className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white">
                    <div className="flex items-center -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>

                    </div>
                </a>

                <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline text-blue-500  ">
                    1
                </a>

                <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-blue-500  ">
                    2
                </a>

                <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-blue-500 ">
                    3
                </a>

                <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-blue-500  ">
                    4
                </a>

                <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-blue-500 ">
                    5
                </a>

                <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white hover:text-blue-500 ">
                    <div className="flex items-center -mx-1">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </a>
            </div>
        </section>

    )
}