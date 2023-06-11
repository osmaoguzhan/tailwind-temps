import { Alata, Josefin_Sans } from "next/font/google";
import styles from "./style.module.css";
import Button from "./button";

export const metadata = {
  title: "Loopstudios",
  description: "Loopstudios page",
};

const josefin = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
});

export default function LoopStudios() {
  return (
    <div className={`${josefin.className} min-h-screen`}>
      {/*hero section*/}
      <section id="hero" className={styles.hero}>
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/*navbar*/}
          <nav className="flex items-center justify-between font-bold text-white">
            <img src="loopstudio/logo.svg" alt="logo" />
            {/*menu*/}
            <div
              className={`hidden h-10 md:flex md:space-x-8 ${alata.className}`}
            >
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
              </div>
            </div>
            {/* hamburger menu*/}
            <div className="md:hidden">
              <Button />
            </div>
          </nav>
          <div
            id="menu"
            className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black transition duration-500 md:hidden"
          >
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Support
            </a>
          </div>
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive experiences that deliver
          </div>
        </div>
      </section>

      {/*feature section*/}
      <section id="features">
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <img
            src="loopstudio/desktop/image-interactive.jpg"
            alt="interactive"
          />
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/*creations section*/}
      <section id="creations">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button
              className={`hidden px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white md:block ${alata.className}`}
            >
              See All
            </button>
          </div>
          {/*items container*/}
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
            {/*item 1*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-deep-earth.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-deep-earth.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Deep Earth
              </h5>
            </div>
            {/*item 2*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-night-arcade.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-night-arcade.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Night Arcade
              </h5>
            </div>
            {/*item 3*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-soccer-team.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-soccer-team.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Soccer Team VR
              </h5>
            </div>
            {/*item 4*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-grid.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-grid.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                The Grid
              </h5>
            </div>
          </div>
          {/*items container*/}
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mt-10">
            {/*item 1*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-from-above.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-from-above.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                From Up Above VR
              </h5>
            </div>
            {/*item 2*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-pocket-borealis.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-pocket-borealis.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Pocket Borealis
              </h5>
            </div>
            {/*item 3*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-curiosity.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-curiosity.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                The Curiosity
              </h5>
            </div>
            {/*item 4*/}
            <div className="group relative overflow-hidden md:w-1/4">
              <img
                src="loopstudio/desktop/image-fisheye.jpg"
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              <img
                src="loopstudio/mobile/image-fisheye.jpg"
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/*item gradient*/}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Make It Fisheye
              </h5>
            </div>
          </div>
          {/*button*/}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white md:hidden w-full">
              See All
            </button>
          </div>
        </div>
      </section>

      {/*footer*/}
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/*logo and menu*/}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <img
                  src="loopstudio/logo.svg"
                  alt="logo"
                  className="w-44 md:ml-3"
                />
              </div>
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/*item 1*/}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/*item 2*/}
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/*item 3*/}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/*item 4*/}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/*item 5*/}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/*social and copyright*/}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/*icons*/}
              <div className="flex items-center justify-center space-x-4 mx-auto md:mx-0 md:justify-end">
                {/*facebook*/}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="loopstudio/icon-facebook.svg"
                      alt="facebook"
                      className="h-6"
                    />
                  </a>
                </div>
                {/*twitter*/}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="loopstudio/icon-twitter.svg"
                      alt="twitter"
                      className="h-6"
                    />
                  </a>
                </div>
                {/*instagram*/}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="loopstudio/icon-instagram.svg"
                      alt="instagram"
                      className="h-6"
                    />
                  </a>
                </div>
                {/*pinterest*/}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="loopstudio/icon-pinterest.svg"
                      alt="pinterest"
                      className="h-6"
                    />
                  </a>
                </div>
              </div>
              {/*copy right*/}
              <div className="font-bold">
                <p>© 2023 Loopstudios. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
