import WizardCard from '@/components/WizardCard'

import { data } from './_data'


export default function Home() {
  return (
  <div>
    <h2 className='text-3xl text-white font-bold mb-3'>Explore More Characters:</h2>
    <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 '>
      {
        data.map((wizard) => (
          <WizardCard key={wizard.id} wizard={wizard} />
        ))
      }
    </section>

  </div> 
  )
}
