import { useRouter } from 'next/router'

export default function Article() {

    const articles = [
        {
            title: 'Guide for beginners in Sportsbetting',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Jason Greb',
            date: 'March 3, 2022'
        },
        {
            title: 'Guide for beginners in Sportsbetting',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Jason Greb',
            date: 'March 3, 2022'
        },
        {
            title: 'Guide for beginners in Sportsbetting',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Jason Greb',
            date: 'March 3, 2022'
        },
        {
            title: 'Guide for beginners in Sportsbettings',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Jason Greb',
            date: 'March 3, 2022'
        },
        {
            title: 'Guide for beginners in Sportsbetting',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Jason Greb',
            date: 'March 3, 2022'
        },
        {
            title: 'Guide for beginners in Sportsbetting',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Jason Greb',
            date: 'March 3, 2022'
        },
    ]

    const router = useRouter();

    return (
        <section className="px-4 py-12 md:py-24 mx-auto max-w-7xl">
            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Sportsbook Articles</h2>
            <p className="mb-20 text-lg text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {articles.map((value, index) => {
                    return (
                        <div key={index}>
                            <img onClick={() => router.push('/articles/19')} src="https://wpr-public.s3.amazonaws.com/wprorg/styles/facebook/s3/field/image/ap20296067506098.jpg?itok=hZu82HBq" className="cursor-pointer object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                            <h2 className="mb-2 text-lg font-semibold text-gray-900">
                                <a onClick={() => router.push('/articles/19')} className="cursor-pointer text-gray-900 hover:text-purple-700">{value.title}</a>
                            </h2>
                            <p className="mb-3 text-sm font-normal text-gray-500">
                                {value.body}
                            </p>
                            <p className="mb-3 text-sm font-normal text-gray-500">
                                <a href="#" className="font-medium text-gray-900 hover:text-purple-700">{value.author} </a>
                                • {value.date}
                            </p>
                        </div>
                    )
                })}
            </div>


            <div class="flex justify-center w-full mt-10">
                <a href="#" class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white">
                    <div class="flex items-center -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>

                    </div>
                </a>

                <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline text-purple-500  ">
                    1
                </a>

                <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-purple-500  ">
                    2
                </a>

                <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-purple-500 ">
                    3
                </a>

                <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-purple-500  ">
                    4
                </a>

                <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white sm:inline hover:text-purple-500 ">
                    5
                </a>

                <a href="#" class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white hover:text-purple-500 ">
                    <div class="flex items-center -mx-1">

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </a>
            </div>
        </section>

    )
}