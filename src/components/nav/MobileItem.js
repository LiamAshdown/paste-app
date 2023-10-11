import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'
import Link from 'next/link'

const MobileItem = ({ children, href, active = false }) => {
  return (
    <Disclosure.Button
      as={Link}
      href={href}
      className={classNames({
        "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700": active,
        "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700": !active
      })}
    >
      {children}
    </Disclosure.Button>
  )
}

export default MobileItem
