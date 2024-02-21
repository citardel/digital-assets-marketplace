import React from 'react';

function Header() {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-20'>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Your marketplace for high-quality{' '}
          <span className='text-blue-600'>
            digital assets
          </span>
          .
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to DigitalHippo. Every asset on our
          platform is verified by our team to ensure our
          highest quality standards.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <button>
            <a href='/products' className='transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Browse Trending
            </a>
          </button>
          <button>
            <a href='/' className='transition duration-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
              Our quality promise &rarr;
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

