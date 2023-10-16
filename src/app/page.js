import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Steps from '@/components/Steps'
import PasteArea from '@/components/form/PasteArea'

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="container mx-auto px-4 lg:w-2/4 my-24">
          <Steps />
          <PasteArea />
        </div>
        <Faq />
      </div>
    </>
  )
}
