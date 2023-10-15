'use client'

import { useState } from 'react'
import { CodeBracketIcon, ClockIcon, ChevronRightIcon, ArrowUpTrayIcon } from '@heroicons/react/20/solid'
import Editor from '@monaco-editor/react'
import BubbleDropdown from '@/components/form/BubbleDropdown'

import { useTheme } from 'next-themes'
import Button from '@/components/Button'
import { useModal } from '@/providers/modal'
import { Success } from '../modal/Success'

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

const initialState = {
  language: languages[0],
  expire: expires[0],
  code: '',
  title: '',
}

export default function PasteArea() {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme()
  const { dispatch } = useModal()

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!form.code.length) {
      // No Code? No Submit!
      return
    }

    try {
      setLoading(true)

      // Send Post
      fetch('/api/paste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          language: form.language.value,
          expire: form.expire.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })

      setForm(initialState)

      dispatch({
        type: 'OPEN_MODAL',
        Content: Success
      })

    } catch {

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 lg:w-2/4 my-24">
      <div>
        <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-blue-300 text-center mb-8">
          Takes 3 steps to share code snippets. No account required.
        </p>
        <div className="grid grid-cols-12 justify-center items-center gap-4 text-center mb-12">
          <div></div>
          <div className="flex items-center justify-around space-x-2 col-span-4">
            Paste
            <ChevronRightIcon width={40} />
          </div>
          <div className="flex items-center justify-around space-x-2 col-span-4">
            Create
            <ChevronRightIcon width={40} />
          </div>
          <div className="flex items-center justify-around space-x-2">
            <div className="gradient-border flex justify-center items-center text-white">
              Share
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-border flex justify-center items-center">
        <form action="#" className="relative w-full" onSubmit={onSubmit}>
          <div className="border border-gray-300 dark:border-zinc-600 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 bg-white dark:bg-zinc-800 dark:text-gray-100">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={(e) => onChange('title', e.target.value)}
              className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0 dark:bg-zinc-800 dark:text-gray-300"
              placeholder="Title"
            />
            <label htmlFor="description" className="sr-only">
              Description
            </label>

            <Editor
              height="350px"
              language={form.language.value}
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              value={form.code}
              options={{
                minimap: {
                  enabled: false,
                },
                contextmenu: false
              }}
              onChange={(value) => onChange('code', value)}
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
                item={form.expire}
                options={expires}
                onChange={(value) => onChange('expire', value)}
                Icon={ClockIcon}
              />
              <BubbleDropdown
                item={form.language}
                options={languages}
                onChange={(value) => onChange('language', value)}
                Icon={CodeBracketIcon}
              />
            </div>
            <div className="flex items-center justify-end space-x-3 border-t border-gray-200 dark:border-zinc-600 px-2 py-2 sm:px-3">
              <div>
                <Button type="submit" Icon={ArrowUpTrayIcon} loading={loading}>Create Snippet</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
