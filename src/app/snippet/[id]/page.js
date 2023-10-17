import CardGame from '@/components/CardGame'
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

  if (!data) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 lg:w-3/4 my-24">
      {data.expired && (
        <div>
          <h1 className="text-3xl font-bold text-center">Snippet has expired</h1>
          <p className="text-center">This snippet has expired and is no longer available.</p>

          <p className="text-center mt-12 mb-2 text-lg">To reward you for trying out <span className="text-gradient font-bold">123Paste</span>, here&apos;s a game of cards!</p>
          <CardGame />
        </div>
      )}
      {!data.expired && (
        <PasteArea snippet={data} />
      )}
    </div>
  )
}

export default Snippet
