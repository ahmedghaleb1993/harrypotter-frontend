
import { fetchWizard } from './action'
import LoadMore from '@/components/LoadMore';


export default async function Home() {

 const data = await fetchWizard(1);

  return (
  <div className='p-16'>
    <h2 className='text-3xl text-white font-bold mb-3'>Explore More Characters:</h2>
    <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 '>
      { data }
    </section>
    <LoadMore />
  </div> 
  )
}
