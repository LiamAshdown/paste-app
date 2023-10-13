import classNames from 'classnames'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

export const Button = ({ children, size = 'default', variant = 'primary', Icon = null, type = 'button', loading = false, onClick = null, block = false, className = '' }) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'px-2.5 py-1.5'
      case 'lg':
        return 'px-3.5 py-2.5'
      default:
        return 'px-3 py-2'
    }
  }

  const getVariant = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-600 hover:bg-green-500'
      default:
        return 'bg-indigo-600 hover:bg-indigo-500'
    }
  }

  return (
    <button
      type={type}
      className={classNames(
        "inline-flex items-center gap-x-2 rounded-md text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        getSize(),
        getVariant(),
        {
          "opacity-50 cursor-not-allowed": loading
        },
        {
          "w-full": block
        },
        className,
        'transition-all duration-200 ease-in-out'
      )}
      onClick={onClick}
    >
      {(Icon && !loading) && (
        <Icon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {loading && <ArrowPathIcon className="animate-spin -ml-0.5 h-5 w-5" aria-hidden="true" />}
      {children}
    </button>
  )
}

export default Button
