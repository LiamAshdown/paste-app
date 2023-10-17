'use client'

import { Dialog } from '@headlessui/react'
import { CheckIcon, ClipboardIcon, ArrowTopRightOnSquareIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button'
import { useState } from 'react'
import { useModal } from '@/providers/modal'
import { copyToClipboard } from '@/lib/utils'

export const Success = () => {
  const { modalState } = useModal()
  const [onCopySuccess, setOnCopySuccess] = useState(false)


  const onCopy = () => {
    setOnCopySuccess(true)

    copyToClipboard(modalState.meta.url)

    setTimeout(() => {
      setOnCopySuccess(false)
    }, 2000)
  }

  const onGoToSnippet = () => {
    window.location.href = modalState.meta.url
  }

  return (
    <>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Snippet created
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Your snippet has been created. You can now share it with others.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2">
        <Button
          Icon={onCopySuccess ? CheckBadgeIcon : ClipboardIcon}
          onClick={onCopy}
          variant={onCopySuccess ? 'success' : 'primary'}
        >
          { onCopySuccess ? 'Copied!' : 'Copy link'}
        </Button>
        <Button
          Icon={ArrowTopRightOnSquareIcon}
          onClick={onGoToSnippet}
        >
          Go to Snippet
        </Button>
      </div>
    </>
  )
}


