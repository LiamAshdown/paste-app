import PasteArea from "@/components/form/PasteArea"


async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/snippet?id=${id}`, {
    method: 'GET',
    cache: 'no-cache'
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Snippet = async ({ params }) => {
  const data = await getData(params.id)

  console.log('data', data)

  return (
    <div className="container mx-auto px-4 lg:w-2/4 my-24">
      <PasteArea snippet={data} />
    </div>
  )
}

export default Snippet
