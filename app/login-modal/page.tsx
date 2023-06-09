export const metadata = {
  title: "Login Modal",
  description: "A login modal with a form and a background image.",
};

export default function LoginModal() {
  // global container
  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50 text-black px-1">
      {/* card container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:m-0">
        {/* left side - content */}
        <div className="p-6 md:p-20">
          {/* top content */}
          <h2 className="mb-5 text-4xl font-bold">Log In</h2>
          <p className="max-w sm mb-8 font-light text-gray-600">
            Log in to ypur account to upload or download pictures, videos or
            music.
          </p>
          <input
            type="text"
            className="w-full p-6 border boder-gray-300 rounded-md placeholder:font-light"
            placeholder="Enter your email address"
          />
          {/* middle content */}
          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <div className="font-medium text-cyan-700 cursor-pointer hover:text-cyan-800">
              Forgot Password?
            </div>
            <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Next -&gt;</span>
            </button>
          </div>
          {/* border */}
          <div className="border-b border-b-gray-300 mt-12"></div>
          {/* bottom content */}
          <p className="py-6 text-sm font thin text-center text-gray-400">
            or login with
          </p>
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img
                src="login-modal/facebook.png"
                alt="facebook"
                className="w-9"
              />
              <span className="font-medium">Facebook</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img
                src="login-modal/google.png"
                alt="facebook"
                className="w-9"
              />
              <span className="font-medium">Google</span>
            </button>
          </div>
        </div>

        {/* right side - image */}
        <img
          src="/login-modal/image.jpg"
          alt="login modal image"
          className="w-[430px] hidden md:block"
        />
      </div>
    </div>
  );
}
