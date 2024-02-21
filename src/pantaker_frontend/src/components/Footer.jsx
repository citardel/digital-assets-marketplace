import React from 'react';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='border-t border-gray-200'>
          <div className='pb-8 pt-16'>
            <div className='flex justify-center'>
              <a href="/">
              {/* Replace this with your icon */}
              <img src={require('../../assets/icp.svg')} className='h-10 w-10' alt='Logo' />
              </a>
            </div>
          </div>

          <div>
            <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
              <div className='absolute inset-0 overflow-hidden rounded-lg'>
                <div aria-hidden='true' className='absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90'></div>
              </div>

              <div className='text-center relative mx-auto max-w-sm'>
                <h3 className='font-semibold text-gray-900'>Become a seller</h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  If you'd like to sell high-quality digital products, you can do so in minutes.{' '}
                  <a href='#' className='whitespace-nowrap font-medium text-black hover:text-zinc-900'>Get started &rarr;</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='text-center'>
            {/* Display the current year dynamically */}
            <p className='text-sm text-muted-foreground'>&copy; {currentYear} All Rights Reserved</p>
          </div>

          <div className='mt-4 flex justify-center'>
            <div className='flex space-x-8'>
              <a href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Terms</a>
              <a href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Privacy Policy</a>
              <a href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


