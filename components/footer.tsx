import React from 'react'

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2023 Conor Bowles. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with React and Next.js (App router & server Actions), TypeScript, Tailwind CSS, Framer Motion, Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer