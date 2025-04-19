function FooterMain({ switchTab, activeTab }) {
    const handleClick = (tab) => {
        switchTab(tab);
      };
    return (
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-1 left-1/2 dark:bg-gray-700 dark:border-gray-600 text-center">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
          <button onClick={() => handleClick('restaurants')} type="button" className={`inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-100 dark:hover:bg-gray-800 group ${activeTab === 'restaurants' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}>
            <svg className="w-6 h-6 mb-1 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Z"/>
            </svg>
          </button>

          <button onClick={() => handleClick('cafes')} type="button" className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${activeTab === 'cafes' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}>
            <svg className="w-6 h-6 mb-1 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13h2c1.1046 0 2 .8954 2 2s-.8954 2-2 2h-2.5M10 3c0 2.4-3 1.6-3 4m8-4c0 2.4-3 1.6-3 4m-7 4 .6398 6.398C5.84428 19.4428 7.56494 21 9.61995 21H10.38c2.0551 0 3.7757-1.5572 3.9802-3.602L15 11H5Z"/>
            </svg>
          </button>
          
          <button onClick={() => handleClick('places')} type="button" className={`inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-100 dark:hover:bg-gray-800 group ${activeTab === 'places' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
          </svg>
        </button>
        </div>
      </div>
    );
  }
  export default FooterMain;
