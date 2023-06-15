import { Poppins } from "next/font/google";
import ShortenButton from "./button";
import styles from "./style.module.css";
import HamburgerButton from "./hamburgerButton";

export const metadata = {
  title: "Shortly",
  icons: {
    icon: "shortly/favicon-32x32.png",
  },
  description:
    "Shortly is a URL shortener that allows you to create short links from long links.",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Shortly() {
  return (
    <div className={`${poppins.className} min-h-screen`}>
      {/* Nav container */}
      <nav className="container mx-auto p-6">
        {/* flex container for all items */}
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src="shortly/logo.svg" alt="logo" />
            {/* Links */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </a>
            </div>
          </div>
          {/* Right side */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-strongCyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>
          <HamburgerButton />
        </div>
        <div
          id="menu"
          className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full py-3 rounded-full bg-strongCyan text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero container */}
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href="#"
                className="py-5 px-10 text-2xl font-bold text-white bg-strongCyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image container */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src="shortly/illustration-working.svg" alt="hero" />
          </div>
        </div>
      </section>

      {/* Shorten container */}
      <section id="shorten" className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Form */}
          <form
            id="link-form"
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Shorten a link here..."
              id="link-input"
            />
            <ShortenButton />
            {/* Error message */}
            <div
              className="absolute left-7 bottom-3 text-red-400 text-sm italic"
              id="err-msg"
            ></div>
          </form>

          {/* link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://www.frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-strongCyan">
                https://rel.ink/kjfdsl
              </div>
              <button className="p-2 px-8 text-white bg-strongCyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
          {/* link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://ticare.software
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-strongCyan">
                https://rel.ink/kjfaxc
              </div>
              <button className="p-2 px-8 text-white bg-veryDarkViolet rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
          {/* link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://tailwind-temps.vercel.app
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-strongCyan">
                https://rel.ink/kjfewgf
              </div>
              <button className="p-2 px-8 text-white bg-strongCyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* stats section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      {/* feature box section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* horizontal line */}
          <div className="hidden absolute top-24 left-16 h-3 bg-strongCyan md:block w-10/12"></div>
          {/* vertical line */}
          <div className="absolute w-2 h-full -ml-1 bg-strongCyan md:hidden left-1/2"></div>
          {/* feature box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img
                  src="shortly/icon-brand-recognition.svg"
                  alt="brand recognition"
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          {/* feature box 2 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img
                  src="shortly/icon-detailed-records.svg"
                  alt="detailed records"
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          {/* feature box 3 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img
                  src="shortly/icon-fully-customizable.svg"
                  alt="brand recognition"
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* cta section */}
      <section id="cta" className={`py-24 bg-veryDarkViolet ${styles.cta}`}>
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="mx-auto py-5 px-10 text-white font-bold bg-strongCyan rounded-full hover:opacity-70 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:sapce-y-0 md:items-start">
          {/* logo */}
          <img src="shortly/logo.svg" alt="logo" />
          {/* menus container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <h5 className="mb-5 font-bold text-white capitalize">Features</h5>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Link Shortening
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Branded Links
                </a>
                <a
                  href="#"
                  className=" capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Analytics
                </a>
              </div>
            </div>
            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <h5 className="mb-5 font-bold text-white capitalize">
                Resources
              </h5>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className=" capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Support
                </a>
              </div>
            </div>
            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <h5 className="mb-5 font-bold text-white capitalize">Company</h5>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-strongCyan"
                >
                  About
                </a>
                <a
                  href="#"
                  className="capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Our Team
                </a>
                <a
                  href="#"
                  className=" capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className=" capitalize text-grayishViolet hover:text-strongCyan"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex space-x-6">
            <a href="#">
              <img
                src="shortly/icon-facebook.svg"
                alt="facebook"
                className={styles.ficon}
              />
            </a>
            <a href="#">
              <img
                src="shortly/icon-twitter.svg"
                alt="twitter"
                className={styles.ficon}
              />
            </a>
            <a href="#">
              <img
                src="shortly/icon-pinterest.svg"
                alt="pinterest"
                className={styles.ficon}
              />
            </a>
            <a href="#">
              <img
                src="shortly/icon-instagram.svg"
                alt="instagram"
                className={styles.ficon}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
