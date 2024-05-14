import React from 'react'

const FoundersCards = ({ name, role, linkedIn, email }) => {
  return (
    <div className="bg-white dark:bg-gray-400 rounded-lg p-6 shadow-lg lg:w-[270px]">
      <div className="bg-gray-200 h-48 mb-4 rounded"></div>
      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <div className="flex mt-4 space-x-3">
        <a href={linkedIn} className="text-blue-600" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.2.8 24 1.77 24H22.2c.97 0 1.8-.8 1.8-1.74V1.74C24 .78 23.2 0 22.23 0zM7.06 20.44H3.65V9.07h3.41v11.37zm-1.7-12.93c-1.1 0-2-.89-2-2s.9-2 2-2c1.1 0 2 .89 2 2s-.9 2-2 2zm15.05 12.93h-3.41v-5.8c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.23 1.52-2.23 3.07v5.91h-3.41V9.07h3.27v1.55h.05c.46-.87 1.56-1.79 3.21-1.79 3.43 0 4.06 2.26 4.06 5.2v6.42z"/>
          </svg>
        </a>
        <a href={`mailto:${email}`} className="text-yellow-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-.9 4-2V3c0-1.1-1.79-2-4-2s-4 .9-4 2v7c0 1.1 1.79 2 4 2zm6.36-2.83C17.9 8.64 16.48 8 14.84 8H9.16c-1.64 0-3.06.64-3.52 1.17C4.2 9.5 4 10.22 4 11v7c0 .78.22 1.5.64 2.17.47.53 1.89 1.17 3.52 1.17h5.68c1.64 0 3.06-.64 3.52-1.17.42-.67.64-1.39.64-2.17v-7c0-.78-.22-1.5-.64-2.17zM16 18H8v-1h8v1zm2-3H6v-1h12v1zm0-3H6v-1h12v1z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default FoundersCards