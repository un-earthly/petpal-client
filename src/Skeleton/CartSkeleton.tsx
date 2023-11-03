import React from 'react'

export default function CartSkeleton() {
  return (
      <li className="flex flex-col bg-gray-300 p-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
              <div className="flex-shrink-0 bg-gray-100 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32 " />
              <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                          <h3 className="text-lg bg-gray-100 h-10 w-44 rounded font-semibold leadi sm:pr-8"></h3>
                          <p className="text-sm bg-gray-100 h-7 w-80 rounded"></p>
                      </div>
                      <div className="text-right">
                          <p className="text-lg font-semibold bg-gray-100 h-10 w-10 rounded"></p>
                      </div>
                  </div>
                  <div className="flex text-sm divide-x">
                      <button type="button" className="flex items-center px-2 py-1 pl-0 h-10 mr-3 w-24 rounded bg-gray-100 space-x-1">                                                </button>
                      <button type="button" className="flex items-center px-2 py-1 space-x-1 h-10 w-44 rounded bg-gray-100"></button>
                  </div>
              </div>
          </div>
      </li>
  )
}
