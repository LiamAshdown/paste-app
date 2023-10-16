import { Listbox, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment } from 'react'

const BubbleDropdown = ({ item, options, disable = false, onChange, Icon }) => {
  return (
    <Listbox as="div" value={item} onChange={onChange} disabled={disable} className={classNames("flex-shrink-0")}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Add a label</Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-600 sm:px-3 dark:bg-zinc-700">
              <Icon
                className={classNames(
                  item.value === null ? 'text-gray-300 dark:text-gray-200' : 'text-gray-500 dark:text-gray-100',
                  'h-5 w-5 flex-shrink-0 sm:-ml-1'
                )}
                aria-hidden="true"
              />
              <span
                className={classNames(
                  item.value === null ? '' : 'text-gray-900 dark:text-gray-100',
                  'hidden truncate sm:ml-2 sm:block'
                )}
              >
                {item.value === null ? 'Label' : item.name}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white dark:bg-zinc-800 py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((label) => (
                  <Listbox.Option
                    key={label.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-100 dark:bg-zinc-700' : 'bg-white dark:bg-zinc-800',
                        'relative cursor-default select-none px-3 py-2'
                      )
                    }
                    value={label}
                  >
                    <div className="flex items-center">
                      <span className="block truncate font-medium">{label.name}</span>
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default BubbleDropdown
