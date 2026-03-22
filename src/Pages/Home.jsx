/* eslint-disable react/prop-types */
import HomeSlider from '../components/HomeSlider/HomeSlider';
import infoOne from '../assets/info-1.png';
import infoTwo from '../assets/info-2.png';
import infoThree from '../assets/info-3.png';
import { FaArrowRight, FaTruckArrowRight } from 'react-icons/fa6';
import Card from '../components/Card/Card';
import banner16 from '../assets/banner-16.png';
import banner17 from '../assets/banner-17.png';
import banner18 from '../assets/banner-18.png';
import banner19 from '../assets/banner-19.png';
import DailyDeal from './DailylDeal';
import ShopbyCategoriesSlider from '../Common/Slider/ShopbyCategoriesSlider';
import BottomProduct from '../components/Header/BottomProduct';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BannerData = [
   {
      id: 1,
      image: infoOne,
      title: 'Everyday Fresh & Clean with Our Products',
      background: '#F0E8D5',
      link: '/fresh',
   },
   {
      id: 2,
      image: infoTwo,
      title: 'Make your Breakfast Healthy and Easy',
      background: '#F3E8E8',
      link: '/fresh/Fresh Fruits',
   },
   {
      id: 3,
      image: infoThree,
      title: 'The best Organic Products Online',
      background: '#E9ECF4',
      link: '/fresh/Fresh Vegetables',
   },
];
const SecondBannerData = [
   {
      id: 1,
      image: banner16,
      title: 'Everyday Fresh with Our Products',
      link: '/fresh/fresh-vegetables',
   },
   {
      id: 2,
      image: banner17,
      title: '100% guaranteed all Fresh items',
      link: '/fresh',
   },
   {
      id: 3,
      image: banner18,
      title: 'Special grocery sale off this month',
      link: '/fresh/fresh-fruits',
   },
   {
      id: 4,
      image: banner19,
      title: 'Enjoy 15% OFF for all vegetable',
      link: '/fresh',
   },
];

const Home = () => {
   const data = useSelector((state) => state.data.data);
   const activeTab = 'Electronics';
   const filteredProducts = data.flatMap((item) =>
      item.cat_name === activeTab
         ? item.items.flatMap((items) => items.products)
         : [],
   );

   return (
      <div>
         <HomeSlider />
         {/* <CustomSlider /> */}
         {/* Banner section start */}
         {/* <div className='p-6'>
            <div className='px-4 mb-4'>
               <h1 className='commonHeading'>Featured Categories</h1>{' '}
            </div>
            <div className='flex justify-between items-center'>
               {BannerData.map((item, index) => (
                  <div key={index} className='dark:bg-gray-900  px-4 relative'>
                     <img
                        src={item.image}
                        alt='banner'
                        className='rounded-2xl'
                     />

                     <div className='absolute top-[30%] left-12'>
                        <h1 className='text-[25px] mb-4 font-bold text-[#253D4E] min-h-[80px] max-w-[300px] BannerData'>
                           {item.title}
                        </h1>
                        <Link
                           to={item.link.replace(/\s+/g, '-').toLowerCase()}
                           className='text-[#253D4E]'
                        >
                           <button className='bg-[#253d4e] text-white primary-btn flex justify-center items-center mt-6'>
                              Shop Now
                              <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
                           </button>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div> */}
         {/* Banner section end */}
         {/* Popular Products section start */}
         <div className='p-6'>
            <div className='flex items-center justify-between gap-2 px-6'>
               <div>
                  <h1 className='commonHeading'>Popular Products</h1>
               </div>
               <div>
                  <div className='flex items-center justify-center gap-[20px] cursor-pointer paragraph'>
                     {/* <p className='padding-0 active-tab'>Electronics</p> */}
                  </div>
               </div>
            </div>
            <div className='product flex flex-wrap pt-12'>
               <div className='flex flex-wrap justify-start items-start w-full'>
                  {filteredProducts.slice(0, 15).map((product, index) => (
                     <div className='w-[20%] px-2 pb-12' key={index}>
                        <Card
                           productData={product}
                           currentImage={product.catImg}
                           image2={product.productImages[1]}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Popular Products section end */}

         {/*Daily Best Sells Start*/}
         {/* <DailyDeal /> */}

         {/*Daily Best Sells End*/}
         {/* Second Banner section start */}
         {/* <div className='p-2 mt-6'>
            <div className='flex justify-between items-stretch px-4'>
               {SecondBannerData.map((item, index) => (
                  <div
                     key={index}
                     className='dark:bg-gray-900 pr-2 relative w-full'
                  >
                     <img
                        src={item.image}
                        alt='banner'
                        className='rounded-xl'
                     />

                     <div className='absolute top-[25%] right-[5%] max-w-[45%]'>
                        <h4 className='text-[16px] font-bold text-[#253D4E] transition-all duration-300 ease-in-out transform hover:translate-y-[-5px]'>
                           {item.title}
                        </h4>
                        <Link
                           to={item.link.replace(/\s+/g, '-').toLowerCase()}
                           className='text-[#253D4E]'
                        >
                           <button className='bg-[#253d4e] text-white supplier-btn flex justify-center items-center mt-2'>
                              Go to supplier
                              <FaArrowRight className='inline-block ml-2 icon animate-icon' />
                           </button>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div> */}

         {/* Second Banner section end */}
         {/* <ShopbyCategoriesSlider /> */}
         {/* <BottomProduct /> */}
      </div>
   );
};

export default Home;
