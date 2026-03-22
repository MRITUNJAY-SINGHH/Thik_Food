/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import banner from '../../assets/banner-9.png';
import icon1 from '../../assets/icon-1.svg';
import icon2 from '../../assets/icon-2.svg';
import icon3 from '../../assets/icon-3.svg';
import icon4 from '../../assets/icon-4.svg';
import icon5 from '../../assets/icon-5.svg';
import './Footer.css';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa6';
import logo from '../../assets/logo.svg';
import payment from '../../assets/payment-method.png';
import apple from '../../assets/app-store.jpg';
import playstore from '../../assets/google-play.jpg';
import email from '../../assets/icon-email-2.svg';
import clock from '../../assets/icon-clock.svg';
import contact from '../../assets/icon-contact.svg';
import location from '../../assets/icon-location.svg';
import phoneCall from '../../assets/phone-call.svg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
   const FooterData = [
      {
         id: 1,
         icon: icon1,
         title: 'Best prices & offers',
         text: 'Orders $50 or more',
      },
      {
         id: 2,
         icon: icon2,
         title: 'Fast services',
         text: '24/7 amazing services',
      },
      {
         id: 3,
         icon: icon3,
         title: 'Great daily deal',
         text: 'When you sign up',
      },
      {
         id: 4,
         icon: icon4,
         title: 'Wide assortment',
         text: 'Mega Discounts',
      },
      {
         id: 5,
         icon: icon5,
         title: 'Within 30 days',
         text: 'Easy returns',
      },
   ];
   const footerSecondData = [
      {
         title: 'Company',
         links: [
            { title: 'About Us', link: '/about' },
            { title: 'Delivery Information', link: '#' },
            { title: 'Privacy Policy', link: '/privacy' },
            { title: 'Terms & Conditions', link: '/terms' },
            { title: 'Contact Us', link: '/contact' },
         ],
      },
      {
         title: 'Account',
         links: [
            { title: 'My Account', link: '/account' },
            { title: 'Compare products', link: '/compare' },
            { title: 'Wish List', link: '/wishlist' },
            { title: 'View Cart', link: '/cart' },
            { title: 'Returns', link: '/contact-us' },
         ],
      },
      // {
      //    title: 'Corporate',
      //    links: [
      //       { title: 'Purchase Order', link: '/account#orders' },
      //       { title: 'Terms of Use', link: '/terms' },
      //       { title: 'Privacy Policy', link: '/Policy' },
      //       { title: 'Purchase Guide', link: '/guide' },
      //       { title: 'Contact Us', link: '/contact-us' },
      //    ],
      // },
      // {
      //    title: 'Popular',
      //    links: [
      //       { title: 'Special Offers', link: '/product' },
      //       { title: 'Discounts', link: '/product' },
      //       { title: 'Reviews', link: '#' },
      //       { title: 'FAQs', link: '#' },
      //       { title: 'Blog', link: '#' },
      //    ],
      // },
   ];
   return (
      <>
         <footer className=' dark:bg-gray-900 p-6 px-10'>
            <div className='grid grid-cols-5 gap-4 mt-16  footer-list'>
               <div className='col-span-2'>
                  <div className='mb-30'>
                     <Link to='/'>
                        <h2 className='text-black font-bold text-2xl'>TIB</h2>
                     </Link>
                  </div>
                  <ul>
                     <li className='flex items-start my-4 space-x-1'>
                        <img src={location} alt='' />
                        <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                           Address:
                        </strong>
                        <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                           Delhi
                        </span>
                     </li>
                     <li className='flex items-center my-4  space-x-1'>
                        <img src={contact} alt='' />
                        <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                           Office No:
                        </strong>
                        <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                           (404) 947-8771
                        </span>
                     </li>
                     <li className='flex items-center my-4 space-x-1'>
                        <img src={email} alt='' />
                        <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                           Email:
                        </strong>
                        <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                           nitishlala@tib.com
                        </span>
                     </li>
                     <li className='flex items-center my-4 space-x-1'>
                        <img src={clock} alt='' />
                        <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                           Hours:
                        </strong>
                        <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                           Monday - Friday : 9:30 AM to 6:30 PM
                        </span>
                     </li>
                  </ul>
               </div>
               {footerSecondData.map((data, i) => (
                  <div key={i} className='col-span-1 ml-[3rem] '>
                     <h4 className='mb-5 text-[22px] text-[#253D4E] font-bold dark:text-white'>
                        {data.title}
                     </h4>
                     <ul className='flex flex-col gap-4'>
                        {data.links.map((link, j) => (
                           <li
                              key={j}
                              className='hover:translate-x-2 transition-transform duration-500 dark:text-white'
                           >
                              <Link to={link.link}>{link.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
               <div className='col-span-1 '>
                  <h4 className='mb-5 text-[24px] text-[#253D4E] font-bold leading-6  dark:text-white'>
                     Install App
                  </h4>
                  <p className='my-2 text-[#253D4E] text-[15px] font-normal  dark:text-white'>
                     From App Store or Google Play
                  </p>
                  <div className='flex flex-wrap my-5 justify-start gap-3'>
                     <Link to='#' className='hover-up'>
                        <img src={apple} alt='' className='max-w-[120px]' />
                     </Link>
                     <Link to='#' className='hover-up'>
                        <img src={playstore} alt='' className='max-w-[120px]' />
                     </Link>
                  </div>
                  <p className='my-2 text-[#253D4E] text-[15px] font-normal  dark:text-white'>
                     Secured Payment Gateways
                  </p>
                  <img src={payment} alt='' />
               </div>
            </div>
         </footer>
         <footer className='py-3   border-t border-[#9cf1ca] mt-2'>
            <div className='flex justify-around items-center'>
               <div className='flex justify-center items-center my-8'>
                  <p className='text-black dark:text-white text-center mb-0 mr-2'>
                     &copy;{new Date().getFullYear()} Powered by
                  </p>
                  <p>
                     <Link
                        to='https://thinktiveit.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-black dark:text-white'
                     >
                        <span className='text-[#29A56C] mb-0'>TIB</span>
                     </Link>
                  </p>
                  <br />
               </div>
               <div>
                  <div className='hotline inline-flex mr-8 min-w-[200px]'>
                     <img src={phoneCall} alt='hotline' />
                     <Link to='tel:+14049478771' className='hover-up'>
                        <p>
                           (404) 947-8771
                           <span className='dark:text-white'>
                              Working Mon - Fri
                           </span>
                        </p>
                     </Link>
                  </div>
                  <div className='hotline inline-flex mr-8 min-w-[200px]'>
                     <img src={phoneCall} alt='hotline' />
                     <Link to='tel:+14049478771' className='hover-up'>
                        <p>
                           (404) 947-8771
                           <span className='dark:text-white'>
                              24/7 Support Center
                           </span>
                        </p>
                     </Link>
                  </div>
               </div>
               <div className='flex gap-3 items-center justify-center social-icon'>
                  <h6 className='mr-2 text-[##253D4E] font-bold dark:text-white'>
                     Follow Us
                  </h6>
                  <Link
                     to='https://www.facebook.com/people/Thinktiveit/61559515927626/'
                     target='_blank'
                     rel='noreferrer'
                     className='hover-up'
                  >
                     <FaFacebook className='icon' size={16} color='white' />
                  </Link>
                  <Link
                     to='https://www.linkedin.com/company/thinktiveit/'
                     className='hover-up'
                     target='_blank'
                     rel='noreferrer'
                  >
                     <FaLinkedin className='icon' size={16} color='white' />
                  </Link>
                  <Link
                     to='https://www.instagram.com/thinktiveit'
                     target='_blank'
                     rel='noreferrer'
                     className='hover-up'
                  >
                     <FaInstagram className='icon' size={16} color='white' />
                  </Link>
                  <Link to='mailto:sales@thinktiveit.com' className='hover-up'>
                     <FaEnvelope className='icon' size={16} color='white' />
                  </Link>
                  <Link to='tel:+14049478771' className='hover-up'>
                     <FaPhone className='icon' size={16} color='white' />
                  </Link>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
