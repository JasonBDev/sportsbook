import Head from 'next/head'
import Image from 'next/image'
import Stars from '../components/stars'
import BetSiteReview from '../components/BetSiteReview'
import Featured from '../components/Featured'
import { motion } from 'framer-motion'

export default function Home() {

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
  ]

  return (
    <>
      <motion.div
        initial={{ y: '10vh', opacity: 0 }} animate={{ y: '0', opacity: 1 }} exit={{ y: '10vh', opacity: 0 }}
        class="px-4 pt-24 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            Lorem Ipsum is simply dummy text standard.
          </h1>
          <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <form action="" method="post" id="revue-form" name="revue-form" target="_blank" class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-100 md:mx-auto rounded-xl sm:max-w-lg sm:flex">
            <div class="flex-1 min-w-0 revue-form-group">
              <label for="member_email" class="sr-only">Email address</label>
              <input
                id="cta-email"
                type="email"
                class="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent"
                placeholder="Enter your email  "
              />
            </div>
            <div class="hidden sm:flex mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
              <button
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
                class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
              >
                Subscribe
              </button>
            </div>
          </form>
          <div class="block sm:hidden mt-2 sm:mt-0 sm:ml-3 revue-form-actions">
            <button
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
              class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
            >
              Subscribe
            </button>
          </div>
          <div class="sm:max-w-lg sm:flex md:mx-auto">
            <p class="mt-3 text-xs text-gray-500">
              By subscribing, you agree with Sportbooks’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </motion.div>

      <section>
        <div class="py-12 mx-auto">
          <div class="max-w-7xl pt-12 mx-auto px-4">
            <div class="space-y-8">

              <BetSiteReview rating={'4.9'} ranking={'1'} />
              <BetSiteReview rating={'4.7'} ranking={'2'} />
              <BetSiteReview rating={'4.4'} ranking={'3'} />
              <BetSiteReview rating={'4.3'} ranking={'4'} />
              <BetSiteReview rating={'4.1'} ranking={'5'} />

            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center mt-20">
        <div className="max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {articles.map((value, index) => {
              return (
                <div key={index}>
                  <img onClick={() => router.push('/articles/19')} src="https://wpr-public.s3.amazonaws.com/wprorg/styles/facebook/s3/field/image/ap20296067506098.jpg?itok=hZu82HBq" className="cursor-pointer object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    <a onClick={() => router.push('/articles/19')} className="cursor-pointer text-gray-900 hover:text-blue-700">{value.title}</a>
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-500">
                    {value.body}
                  </p>
                  <p className="mb-3 text-sm font-normal text-gray-500">
                    <a href="#" className="font-medium text-gray-900 hover:text-blue-700">{value.author} </a>
                    • {value.date}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Featured />

      <section class="px-4 py-24 pt-8 mx-auto max-w-7xl">
        <h2 class="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
        <div class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
          <div>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Lorem Ipsum?</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Lorem Ipsum?</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Is there a discount for Startups and Colleges?</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <a href="https://help.hellonext.co/faq/startup-eligibility/" target="_blank">here</a>.
            </p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Lorem Ipsum?</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Is Hellonext free for open-source?</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Lorem Ipsum?</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Can I self-host Hellonext?</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Lorem Ipsum?</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Lorem Ipsum?</h5>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            </p>
          </div>
        </div>
      </section>





    </>
  )
}
