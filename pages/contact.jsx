import { useState } from "react"

export default function Contact() {

    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center">
                <section class="w-full max-w-7xl px-4">
                    <div class="container items-center py-6 md:py-8">
                        <div class="flex flex-col w-full my-6 transition ease-in-out transform bg-white rounded-lg md:mt-0">
                            <div class="mt-0 md:mt-8">
                                <div class="mt-0 md:mt-8">
                                    <h1 class="mb-8 text-3xl font-extrabold leading-tight text-gray-900">Get in touch</h1>
                                    <form action="#" method="POST" class="space-y-6">
                                        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                                            <div>
                                                <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                                <div class="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autocomplete="email"
                                                        required=""
                                                        placeholder="Your Email"
                                                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                            <div class="space-y-1">
                                                <label for="password" class="block text-sm font-medium text-neutral-600"> Full name </label>
                                                <div class="mt-1">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autocomplete="current-password"
                                                        required=""
                                                        placeholder="Your name"
                                                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="email" class="block text-sm font-medium text-neutral-600"> Message </label>
                                            <textarea
                                                class="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform h-48 border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent apearance-none autoexpand"
                                                id="description"
                                                type="text"
                                                name="description"
                                                placeholder="Message..."
                                                required=""
                                            ></textarea>
                                        </div>

                                        <div className="w-full flex justify-start">
                                            <button
                                                type="submit"
                                                class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition w-fit duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            <section class="px-4 pt-0 pb-10 md:pb-36 mx-auto max-w-7xl px-4">
                <h1 class="mb-8 text-3xl font-extrabold leading-tight text-gray-900">Frequently Asked Questions</h1>
                <div class="text-sm">
                    <div x-data="collapse()" class="px-4 mb-3 bg-gray-100 rounded">
                        <button onClick={() => setCollapse1(!collapse1)}
                            x-spread="trigger"
                            class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                            role="button"
                            aria-controls="faq4"
                            aria-expanded="false"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <svg class="flex-none w-4 h-4 ml-4 transition transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {collapse1 &&
                            <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" id="faq4">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        }
                    </div>
                    <div x-data="collapse()" class="px-4 mb-3 bg-gray-100 rounded">
                        <button onClick={() => setCollapse2(!collapse2)}
                            x-spread="trigger"
                            class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                            role="button"
                            aria-controls="faq5"
                            aria-expanded="false"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <svg class="flex-none w-4 h-4 ml-4 transition transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {collapse2 &&
                            <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" id="faq4">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        }
                    </div>
                    <div x-data="collapse()" class="px-4 mb-3 bg-gray-100 rounded">
                        <button onClick={() => setCollapse3(!collapse3)}
                            x-spread="trigger"
                            class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                            role="button"
                            aria-controls="faq6"
                            aria-expanded="false"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <svg class="flex-none w-4 h-4 ml-4 transition transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {collapse3 &&
                            <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" id="faq4">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        }
                    </div>
                </div >
            </section >


        </>
    )
}