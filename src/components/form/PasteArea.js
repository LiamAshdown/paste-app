'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Editor from '@monaco-editor/react'

import { CodeBracketIcon } from '@heroicons/react/20/solid'

const languages = [
  {
    name: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'TypeScript',
    value: 'typescript',
  },
  {
    name: 'Python',
    value: 'python',
  },
  {
    name: 'Java',
    value: 'java',
  },
  {
    name: 'C',
    value: 'c',
  },
  {
    name: 'C++',
    value: 'cpp',
  },
  {
    name: 'C#',
    value: 'csharp',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PasteArea() {
  const [language, setLanguage] = useState(languages[0])

  const code = "console.log('Monaco Editor!');";

  return (
    <div className="container mx-auto px-4 w-2/4">
      <form action="#" className="relative">
        <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
            placeholder="Title"
          />
          <label htmlFor="description" className="sr-only">
            Description
          </label>

          <Editor
            height="350px"
            language={language.value}
            theme="light"
            value={code}
            options={{
              minimap: {
                enabled: false,
              },
              contextmenu: false
            }}
          />

          {/* Spacer element to match the height of the toolbar */}
          <div aria-hidden="true">
            <div className="py-2">
              <div className="h-9" />
            </div>
            <div className="h-px" />
            <div className="py-2">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-px bottom-0">
          <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
            <Listbox as="div" value={language} onChange={setLanguage} className="flex-shrink-0">
              {({ open }) => (
                <>
                  <Listbox.Label className="sr-only">Add a label</Listbox.Label>
                  <div className="relative">
                    <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                      <CodeBracketIcon
                        className={classNames(
                          language.value === null ? 'text-gray-300' : 'text-gray-500',
                          'h-5 w-5 flex-shrink-0 sm:-ml-1'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          language.value === null ? '' : 'text-gray-900',
                          'hidden truncate sm:ml-2 sm:block'
                        )}
                      >
                        {language.value === null ? 'Label' : language.name}
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {languages.map((label) => (
                          <Listbox.Option
                            key={label.value}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-gray-100' : 'bg-white',
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
          </div>
          <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
            <div>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
