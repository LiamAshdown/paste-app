const faqs = [
  {
    id: 1,
    question: "How does 123paste ensure privacy and security?",
    answer:
      "We use strong encryption to protect the content you paste on our platform. Every paste is encrypted with a unique key, ensuring that only those with the link to the paste can access its contents. We do not store any personal information or data, and there is no sign-in or registration required, enhancing your privacy.",
  },
  {
    id: 2,
    question: "How long do pastes stay available?",
    answer:
      "Pastes on 123paste are designed to be available for a limited time. By default, pastes are set to expire after a certain period, which you can choose during the paste creation process. Once a paste expires, it is permanently deleted from our servers.",
  },
  {
    id: 3,
    question: "Is this project open source?",
    answer:
      "Yes, this project is open source and available on GitHub. You can find the link to the repository in the footer of this page.",
  },
]

export default function Faq() {
  return (
    <div className="bg-gray-50 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 dark:divide-gray-50/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-200 text-gradient">Frequently asked questions</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-gray-50/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-white">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
