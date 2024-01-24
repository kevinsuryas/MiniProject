import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../components/hero'


export default function Home() {
  return (
    <>
    <Hero heading='Event Hub' message='Find your events here'/>

    <div className='flex items-center gap-5 ml-[2rem] mt-[5rem]'>
      <div className='text-2xl'>
        Browsing Event In 
      </div>
      <div>
        <select class="ui fluid search dropdown" multiple="">
          <option value="AZ">Bandung</option>
          <option value="AR">Bogor</option>
          <option value="AK">BSD</option>
          <option value="">Jakarta</option>
          <option value="AL">Tangerang</option>
        </select>
      </div>
    </div>

    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
      <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sports</button>
      <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Music</button>
      <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
      <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Free</button>
    </div>

    <div className='flex justify-center'>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
        <div className="card w-64 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Name</h2>
                <p>Time</p>
                <p>Price</p>
                <p>Location</p>
                <p>Categories</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Name</h2>
              <p>Time</p>
              <p>Price</p>
              <p>Location</p>
              <p>Categories</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Name</h2>
              <p>Time</p>
              <p>Price</p>
              <p>Location</p>
              <p>Categories</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Name</h2>
              <p>Time</p>
              <p>Price</p>
              <p>Location</p>
              <p>Categories</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
        </div>


      </div>
    </div>

    
    </>
  )
}
