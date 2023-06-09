export const metadata = {
  title: "Image Gallery",
  description: "Image Gallery",
};

export default function ImageGallery() {
  // global container
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      {/* card container */}
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* menu container */}
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* menu items */}
          <div className="group">
            <a href="#" className="text-black">
              Vector
            </a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#" className="text-black">
              Illustrations
            </a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#" className="text-black">
              Images
            </a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#" className="text-black">
              Icons
            </a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>

        {/* search container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* search bar and svg*/}
          <div className="flex justify-between border-b">
            <input
              type="text"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none text-black"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>

          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        {/* gallery container */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* gallery item 1 */}
          <div className="relative group">
            <img
              src="image-gallery/image1.jpg"
              alt="first image"
              className="w-72"
            />
            <div className="aboslute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-extra-sm">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="image-gallery/bookmark.svg"
                    alt="bookmark"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* gallery item 2 */}
          <div className="relative group">
            <img
              src="image-gallery/image2.jpg"
              alt="first image"
              className="w-72"
            />
            <div className="aboslute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-extra-sm">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="image-gallery/bookmark.svg"
                    alt="bookmark"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* gallery item 3 */}
          <div className="relative group">
            <img
              src="image-gallery/image3.jpg"
              alt="first image"
              className="w-72"
            />
            <div className="aboslute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-extra-sm">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="image-gallery/bookmark.svg"
                    alt="bookmark"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* gallery item 4 */}
          <div className="relative group">
            <img
              src="image-gallery/image4.jpg"
              alt="first image"
              className="w-72"
            />
            <div className="aboslute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-extra-sm">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="image-gallery/bookmark.svg"
                    alt="bookmark"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* gallery item 5 */}
          <div className="relative group">
            <img
              src="image-gallery/image5.jpg"
              alt="first image"
              className="w-72"
            />
            <div className="aboslute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-extra-sm">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="image-gallery/bookmark.svg"
                    alt="bookmark"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* gallery item 6 */}
          <div className="relative group">
            <img
              src="image-gallery/image6.jpg"
              alt="first image"
              className="w-72"
            />
            <div className="aboslute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-extra-sm">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="image-gallery/bookmark.svg"
                    alt="bookmark"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
