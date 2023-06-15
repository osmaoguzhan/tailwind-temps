"use client";

export default function ShortenButton() {
  function validateUrl(e: any) {
    e.preventDefault();
    const input = document.getElementById("link-input") as HTMLInputElement;
    const error = document.getElementById("err-msg");
    const link = input.value;
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!link.match(regex)) {
      error!.innerHTML = "Please enter a valid link";
      input.classList.add("border-red-500");
      error!.classList.remove("hidden");
      return;
    }
    error!.classList.add("hidden");
    input.classList.remove("border-red-500");
  }

  return (
    <button
      onClick={(e) => validateUrl(e)}
      className="px-10 py-3 text-white bg-cyan rounded-lg bg-strongCyan hover:bg-cyanLight focus:outline-none md:py-2"
    >
      Shorten It!
    </button>
  );
}
