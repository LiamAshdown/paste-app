'use client'

import { Fragment, useEffect } from 'react'
import Item from './Item'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkLightToggle from './DarkLightToggle'
import MobileItem from './MobileItem'
import Link from 'next/link'


export default function Nav() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    const navTop = nav.offsetTop

    const stickyNav = () => {
      if (window.scrollY >= navTop) {
        nav.classList.add('sticky')
      } else {
        nav.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', stickyNav)

    return () => {
      window.removeEventListener('scroll', stickyNav)
    }
  }, [])

  return (
    <Disclosure as="nav" className="w-full top-0 bg-white dark:bg-gray-800 shadow-lg z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link className="text-gradient" href="/">
                    123Paste
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Item href="/about">Github</Item>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <DarkLightToggle />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <MobileItem href="/wiki">Github</MobileItem>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
