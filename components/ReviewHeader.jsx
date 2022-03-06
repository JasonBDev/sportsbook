import Stars from '../components/stars';

export default function ReviewHeader() {
    return (
        <>
            <div className='pb-8'>
                <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center sm:justify-between pb-4">
                    <img className='w-48 mr-5' src="https://media.mytopsportsbooks.com/app/uploads/2017/10/Bovada-Logo.png" alt="" />
                    <div className="flex items-center -ml-2">
                        <Stars rating={'4.9'} />
                        <h1 className='text-2xl text-gray-600 font-medium ml-2'>{'4.9'} <span className="text-xs -ml-1 text-gray-600">/5</span> </h1>
                    </div>
                </div>
                <div className="flex flex-col border-t border-gray-200 py-4 w-full">
                    <div className="flex flex-col w-full">
                        <h1 className='text-gray-700 leading-loose font-bold'>Year Created:</h1>
                        <h1 className='text-gray-700 leading-loose'>2001</h1>
                    </div>
                </div>
                <div className="flex flex-col border-t border-gray-200 py-4 w-full">
                    <div className="flex flex-col w-full">
                        <h1 className='text-gray-700 leading-loose font-bold'>Options:</h1>
                        <h1 className='text-gray-700 leading-loose '>UFC</h1>
                        <h1 className='text-gray-700 leading-loose '>Football</h1>
                        <h1 className='text-gray-700 leading-loose'>Basketball</h1>
                    </div>
                </div>
                <div className="flex flex-col border-t border-gray-200 py-4 w-full">
                    <div className="flex flex-col w-full">
                        <h1 className='text-gray-700 leading-loose font-bold'>Languages:</h1>
                        <h1 className='text-gray-700 leading-loose'>English, Spanish, French, German</h1>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                    <h1 className='w-full pr-5 py-3 bg-gray-100 rounded-md mr-4 w-fit text-gray-700 font-normal text-left overflow-hidden'> <span className='rounded-l-md font-bold text-gray-700 px-5 py-4 mr-3 bg-gray-200 '>Signup Bonus</span> 100% up to $1000 </h1>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        router.push('https://www.bovada.lv/');
                    }} className='w-full md:w-fit block px-5 py-3 text-base font-medium text-white whitespace-nowrap bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10'>Bet now</button>
                </div>
                <div className="w-full flex flex-col md:flex-row divide-y border-t border-gray-200 mt-4 ">
                    <div className="w-full flex-col py-4">
                        <h1 className='text-gray-700 leading-loose font-bold text-xl'>Pros</h1>
                        <div className="flex items-center space-x-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <h1 className='text-gray-700 leading-none'>Lots of betting options</h1>
                        </div>
                        <div className="flex items-center space-x-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <h1 className='text-gray-700 leading-none'>Fast Payout</h1>
                        </div>
                    </div>
                    <div className="w-full flex-col py-4">
                        <h1 className='text-gray-700 leading-loose font-bold text-xl'>Cons</h1>
                        <div className="flex items-center space-x-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <h1 className='text-gray-700 leading-none'>Bad mobile experience</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}