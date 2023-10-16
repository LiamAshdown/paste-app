import PasteArea from '@/components/form/PasteArea'
import { notFound } from 'next/navigation'


async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/snippet?id=${id}`, {
    method: 'GET',
    cache: 'no-cache'
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}

const Snippet = async ({ params }) => {
  const data = await getData(params.id)

  console.log(data)

  if (!data) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 lg:w-3/4 my-24">
      {data.expired && (
        <div>
          <h1 className="text-3xl font-bold text-center">Snippet has expired</h1>
          <p className="text-center">This snippet has expired and is no longer available.</p>
        </div>
      )}
      {!data.expired && (
        <PasteArea snippet={data} />
      )}
    </div>
  )
}

export default Snippet
