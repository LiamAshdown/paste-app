import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import PasteArea from '@/components/form/PasteArea'

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <PasteArea />
        <Faq />
      </div>
    </>
  )
}
