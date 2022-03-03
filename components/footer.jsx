import Link from "next/link"

export default function Footer() {
    return (
        <footer className="px-4 py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-9 lg:gap-20">
                <div className="col-span-3">
                    <Link href="/" title="Hellonext Home Page" className="flex items-center">
                        <h1 className='text-2xl font-extrabold text-gray-900 cursor-pointer'>Sportsbook</h1>
                    </Link>
                    <p className="my-4 text-xs leading-normal text-gray-600">
                        Whether you are a sports betting rookie, or are a pro looking to improve your online betting experience, read our sports betting reviews and start betting the smart way!
                    </p>
                </div>
                <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Articles</p>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">All Articles</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Newest Articles</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Highest Articles</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Lowest Articles</a>
                </nav>
                <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                    <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Reviews</p>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">All Reviews</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Newest Reviews</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Highest Rated</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Lowest Rated</a>
                </nav>
                <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                    <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Twitter</a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Instagram </a>
                    <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Facebook</a>
                </nav>
            </div>
            <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
                <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">Sportsbetting reviews</p>
                <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">Copyright &copy; 2022 Sportsbook</p>
            </div>
        </footer>

    )
}