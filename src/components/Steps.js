import { ChevronRightIcon } from '@heroicons/react/20/solid'

const Steps = () => {
  return (
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
  )
}

export default Steps
