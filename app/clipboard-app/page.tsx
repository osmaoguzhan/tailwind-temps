export const metadata = {
  title: "Clipboard App",
  description: "Clipboard App",
};

import { Bai_Jamjuree } from "next/font/google";
import styles from "./style.module.css";

const baiJamjuree = Bai_Jamjuree({
  weight: "400",
  subsets: ["latin"],
});

export default function ClipboardApp() {
  return (
    <div className={`${styles.main} ${baiJamjuree.className} min-h-screen`}>
      {/* hero section */}
      <section id="hero">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <img
            src="clipboard-app/logo.svg"
            alt="logo"
            className="mx-auto my-16"
          />
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            A history of everything you copy
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-3xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          {/* button container */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>
      {/* snippets section */}
      <section id="snippets">
        <div className="max-w-6xl mx-auto text-center mb-20 px-10">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Keep track of your snippets
          </h3>
          <p className="max-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      {/* features section */}
      <section id="features">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16 my-20">
          <div className="flex flex-col md:flex-row md:space-x-32">
            {/* image */}
            <div className="md:w-1/2">
              <img
                src="clipboard-app/image-computer.png"
                alt="computer"
                className="md:absolute right-[50%]"
              />
            </div>
            {/* items container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {/* item 1*/}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Quick Search
                </h5>
                <p className="max-w md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* item 2*/}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  iCloud Sync
                </h5>
                <p className="max-w md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              {/* item 3*/}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Complete History
                </h5>
                <p className="max-w md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* access anywhere section */}
      <section id="access-anywhere">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16 my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Access Clipboard anywhere
          </h3>
          <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img
            src="clipboard-app/image-devices.png"
            alt="devices"
            className="mx-auto"
          />
        </div>
      </section>

      {/* supercharge section */}
      <section id="supercharge">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16 my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Supercharge your workflow
          </h3>
          <p className="max-w-3xl mx-auto mb-16 text-xl leading-9 text-center text-grayishBlue">
            We’ve got the tools to boost your productivity.
          </p>
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="clipboard-app/icon-blacklist.svg"
                alt="blacklist"
                className="mb-6"
              />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Create blacklists
              </h5>
              <p className="max-w-md text-grayishBlue">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            {/* item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="clipboard-app/icon-text.svg"
                alt="text"
                className="mb-6"
              />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Plain text snippets
              </h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            {/* item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="clipboard-app/icon-preview.svg"
                alt="preview"
                className="mb-6"
              />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Sneak preview
              </h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* references section */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="clipboard-app/logo-google.png" alt="google" />
          <img src="clipboard-app/logo-ibm.png" alt="ibm" />
          <img src="clipboard-app/logo-microsoft.png" alt="microsoft" />
          <img src="clipboard-app/logo-hp.png" alt="hp" />
          <img
            src="clipboard-app/logo-vector-graphics.png"
            alt="vector-graphics"
          />
        </div>
      </section>

      {/* bottom section */}
      <section id="bottom">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16 my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Clipboard for iOS and Mac OS
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-9 text-center text-grayishBlue">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          {/* button container */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-gray-50">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img src="clipboard-app/logo.svg" alt="logo" className="scale-50" />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex row md:mb-0 md:space-y-0 text-grayishBlue">
            {/* menus */}
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              {/* menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQ
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              {/* menu 3 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* copy right and social media*/}
          <div className="flex justify-between w-32 py-5">
            <a href="#">
              <img src="clipboard-app/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="clipboard-app/icon-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="clipboard-app/icon-instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
