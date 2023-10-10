'use client'

import { Disclosure } from '@headlessui/react'
import Item from './Item'
import DarkLightToggle from '@/components/nav/DarkLightToggle'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Item href="/about">Wiki</Item>
                  <Item href="/about">Contact</Item>
                </div>
              </div>
              <div className="sm:ml-6 sm:flex sm:items-center">
                <DarkLightToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
