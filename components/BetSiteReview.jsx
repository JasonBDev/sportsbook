import Stars from "./stars"
import { useRouter } from 'next/router';

export default function BetSiteReview(props) {

    const { rating, ranking } = props;
    const router = useRouter();

    return (
        <>
            <div onClick={() => router.push('https://www.bovada.lv/')} className="cursor-pointer hover:bg-gray-100 hidden lg:flex flex-row justify-between items-center border border-gray-200 p-8 rounded-md">
                <div className="flex-col justify-between items-center h-32">
                    <div className='flex items-center justify-between w-full'>
                        <div className="flex flex-row items-center">
                            <h1 className='text-2xl text-gray-600 font-medium mr-5 -mt-0.5'>#{ranking}</h1>
                            <img className='w-48 mr-5' src="https://media.mytopsportsbooks.com/app/uploads/2017/10/Bovada-Logo.png" alt="" />
                        </div>

                    </div>
                    <div className="flex items-center -ml-2">
                        <Stars rating={rating} />
                        <h1 className='text-2xl text-gray-600 font-medium ml-2'>{rating} <span className="text-xs -ml-1 text-gray-600">/5</span> </h1>
                    </div>

                </div>

                <div className="flex flex-col justify-center h-32">
                    <h1 className='text-xl text-gray-600 font-medium text-center mt-2'>Bonus: <span className='font-normal'>100% up to $1000</span> </h1>
                    <p class="flex py-4 px-20 text-xl text-gray-600 text-left">
                        Good Customer Support
                    </p>
                </div>


                <div className="flex flex-col space-x-4 space-y-2 items-center justify-center h-32">

                    <div className="w-full flex justify-end">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            router.push('https://www.bovada.lv/');
                        }} className='block px-5 py-3 text-base font-medium text-white whitespace-nowrap bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10'>Bet now</button>
                    </div>
                    <div className="flex justify-end items-center w-full">
                        <a onClick={(e) => {
                            e.stopPropagation();
                            router.push('/reviews/19');
                        }} className='cursor-pointer text-md font-normal'>Our Review</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

            </div>

            <div className="lg:hidden flex flex-col border border-gray-200 p-4 sm:p-8 rounded-md">

                <div className="flex flex-row justify-between items-center">
                    <div className='flex items-center justify-between w-full'>
                        <div className="flex flex-row items-center ">
                            <h1 className='mr-5'>🥇</h1>
                            <img className='w-32 sm:w-48 mr-5' src="https://media.mytopsportsbooks.com/app/uploads/2017/10/Bovada-Logo.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center -ml-2">
                        <div className="hidden md:flex">
                            <Stars rating={rating} />
                        </div>
                        <h1 className='text-2xl text-gray-600 font-medium ml-2 whitespace-nowrap'>{rating} <span className="text-xs -ml-1 text-gray-600">/5</span> </h1>
                    </div>

                </div>

                <div className="flex flex-col w-full">
                    <h1 className='text-xl text-gray-600 font-medium text-left mt-2'>Bonus: <span className='font-normal'>100% up to $1000</span> </h1>
                    <p class="flex py-4 text-xl text-gray-600 text-left">{rating}
                        Good Customer Support
                    </p>
                </div>

                <div className="flex flex-col space-x-4 space-y-2 items-center justify-center mt-4">
                    <div className="w-full flex justify-end">
                        <button className='w-full md:w-fit block px-5 py-3 text-base font-medium text-white whitespace-nowrap bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10'>Bet now</button>
                    </div>
                    <div className="flex justify-start md:justify-end items-center w-full ">
                        <h1 className='text-md font-normal'>Our Review</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}