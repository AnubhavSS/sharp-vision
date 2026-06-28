import React from 'react'

const Header = () => {
  return (
 <div className="absolute top-4 left-0 w-full z-50 px-4">
  <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
    <img
      src="/favicon.webp"
      alt="Sharp Vision Logo"
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain"
    />

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-none">
      <span className="text-black">Sharp</span>{" "}
      <span className="text-orange-400">Vision</span>
    </h1>
  </div>
</div>
  )
}

export default Header