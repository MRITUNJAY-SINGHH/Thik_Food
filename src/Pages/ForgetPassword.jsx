import { Link } from 'react-router-dom';
import forgetPassword from '../assets/forgot_password.svg';

const ForgotPasswordPage = () => {
     const handleSubmit = (event) => {
       event.preventDefault();
       // handle form submission here
     };
  return (
    <div className='page-content pt-[120px] pb-[100px]'>
      <div className=''>
        <div className=''>
          <div className='w-1/3 mx-auto'>
            <div className='heading_s1'>
              <img
                className='rounded-md'
                src={forgetPassword}
                alt='Forgot Password'
              />
              <h2 className='mb-[15px] mt-[15px] text-[#253D4E] font-semibold leading-snug text-4xl dark:text-white'>
                Forgot your password?
              </h2>
              <p className='text-base font-normal leading-6 mb-5 text-custom-gray dark:text-white'>
                Not to worry, we got you! Let’s get you a new password. Please
                enter your email address or your Username.
              </p>
              <form onSubmit={handleSubmit}>
                <div className='mb-4 forget-input'>
                  <input
                     className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                    type='text'
                    required
                    name='email'
                    placeholder='Username or Email *'
                  />
                </div>
                <div className='mb-4 flex justify-between items-center'>
                  <div className='forget-input'>
                    <input
                       className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      type='text'
                      required
                      name='email'
                      placeholder='Security code *'
                    />
                  </div>
                  <span className='ml-4 security-code'>
                    <b className='text-red-500'>{Math.floor(Math.random()*10)}</b>
                    <b className='text-yellow-500'>{Math.floor(Math.random()*10)}</b>
                    <b className='text-green-500'>{Math.floor(Math.random()*10)}</b>
                    <b className='text-blue-500'>{Math.floor(Math.random()*10)}</b>
                  </span>
                </div>
                <div className='mb-6 flex justify-between items-center'>
                  <div className='forget-password'>
                    <label className='block text-gray-500  forget-check-lebal'>
                      <input className='mr-2 leading-tight' type='checkbox' />
                      <span className='text-sm dark:text-white'>
                        I agree to terms &amp; Policy.
                      </span>
                    </label>
                  </div>
                  <Link className='text-gray-500 dark:text-white' to={'#'}>
                    Learn more
                  </Link>
                </div>
                <div>
                  <button
                    className='bg-blue-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button hover-up'
                    type='submit'
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;