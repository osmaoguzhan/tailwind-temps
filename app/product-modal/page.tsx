export const metadata = {
  title: "Product Modal",
  description: "Product Modal",
};

export default function ProductModal() {
  return (
    // global container
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 md:flex-row">
      {/* card container */}
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* card image */}
        <div>
          <img
            src="product-modal/headphone.png"
            alt="headphones"
            className="mx-auto hover:scale-105 duration-300 w-60 transform"
          />
        </div>
        {/* card content */}
        <div className="flex flex-col space-y-6">
          {/* card title */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            <div className=" max-w-sm text-2xl font-medium text-black">
              Razer Kraken Kitty Edt Gaming Headset Quarz
            </div>

            {/* card price */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through text-black">$799</p>
              <p className="text-5xl font-bold text-black">$599</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>

            {/* buttons */}
            <div className="group">
              <button className="w-full transition-all duration-150 bg-blue-700 text-white border border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>

            {/* stock */}
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm text-black">50+ pcs. in stock</div>
            </div>

            {/* bottom buttons */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <img
                  src="product-modal/weight.png"
                  alt="wieght"
                  className="w-8"
                />
                <span className="text-black">Add to cart</span>
              </button>
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <img
                  src="product-modal/heart.png"
                  alt="heart"
                  className="w-8"
                />
                <span className="text-black">Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
