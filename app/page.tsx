import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
        <Link
          href="/email-subscribe"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Email Subscribe </h2>
          <Image
            src="/images/email-subscribe.png"
            alt="Email Subscribe"
            width={500}
            height={500}
          />
        </Link>

        <Link
          href="/pricing-cards"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Pricing Cards </h2>
          <Image
            src="/images/pricing-cards.png"
            alt="Pricing Cards"
            width={500}
            height={500}
          />
        </Link>
        <Link
          href="/product-modal"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Product Modal </h2>
          <Image
            src="/images/product-modal.png"
            alt="Product Modal"
            width={500}
            height={500}
          />
        </Link>
        <Link
          href="/image-gallery"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Image Gallery </h2>
          <Image
            src="/images/image-gallery.png"
            alt="Image Gallery"
            width={500}
            height={500}
          />
        </Link>
        <Link
          href="/login-modal"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Login Modal </h2>
          <Image
            src="/images/login-modal.png"
            alt="Login Modal"
            width={500}
            height={500}
          />
        </Link>
        <Link
          href="/clipboard-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Clipboard App </h2>
          <Image
            src="/images/clipboard.png"
            alt="Clipboard App"
            width={500}
            height={100}
          />
        </Link>
        <Link
          href="/loopstudios"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>LoopStudios </h2>
          <Image
            src="/images/loopstudios.png"
            alt="LoopStudios"
            width={500}
            height={500}
          />
        </Link>
      </div>
    </main>
  );
}
