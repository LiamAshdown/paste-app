import classNames from 'classnames'
import Link from 'next/link'

export const Item = ({ children, href, active = false}) => {
  return (
    <>
      <Link
        href={href}
        className={classNames({
          "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-300": active,
          "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200" : !active
        })}
      >
        {children}
      </Link>
    </>
  )
}

export default Item
