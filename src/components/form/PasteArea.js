'use client'

import { useState } from 'react'
import { CodeBracketIcon, ClockIcon } from '@heroicons/react/20/solid'
import Editor from '@monaco-editor/react'
import BubbleDropdown from '@/components/form/BubbleDropdown'

import { useTheme } from 'next-themes'
import classNames from 'classnames'

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

const expires = [
  {
    name: 'Never',
    value: 0,
  },
  {
    name: '10 Minutes',
    value: 600
  },
  {
    name: '1 Hour',
    value: 3600,
  },
  {
    name: '1 Day',
    value: 86400,
  },
  {
    name: '1 Week',
    value: 604800,
  },
  {
    name: '1 Month',
    value: 2592000,
  },
  {
    name: '1 Year',
    value: 31536000,
  },
]

export default function PasteArea() {
  const [language, setLanguage] = useState(languages[0])
  const [expire, setExpire] = useState(expires[0])
  const { theme } = useTheme()

  const code = "console.log('Monaco Editor!');";

  return (
    <div className="container mx-auto px-4 lg:w-2/4 my-12">
      <div className="rainbow">
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-zinc-600 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 bg-white dark:bg-zinc-800 dark:text-gray-100">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0 dark:bg-zinc-800 dark:text-gray-300"
              placeholder="Title"
            />
            <label htmlFor="description" className="sr-only">
              Description
            </label>

            <Editor
              height="350px"
              language={language.value}
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
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
            <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3  border-t border-gray-200 dark:border-zinc-600 ">
              <BubbleDropdown
                item={expire}
                options={expires}
                onChange={setExpire}
                Icon={ClockIcon}
              />
              <BubbleDropdown
                item={language}
                options={languages}
                onChange={setLanguage}
                Icon={CodeBracketIcon}
              />
            </div>
            <div className="flex items-center justify-end space-x-3 border-t border-gray-200 dark:border-zinc-600 px-2 py-2 sm:px-3">
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
    </div>
  )
}
