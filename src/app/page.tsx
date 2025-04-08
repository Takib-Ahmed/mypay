
import Hero from '@/shared/modules/hero'
import Pricing from '@/shared/modules/pricing/pricing'
import React from 'react'
import Api from '@/shared/modules/API/Api'
import Client from '@/shared/modules/clients/clientcm'
import Information from '@/shared/modules/Information/information'
import ShadowSvg from './assets/icons/svgs/Shadow'
import Footer from '@/shared/modules/Footer/footer'

export default function Page() {
  return (
    <div>
      <Hero/>
 

<div className=' bg-gradient2'>

<div className="relative">
<Pricing/>
<ShadowSvg className=' shadow  absolute right-0   w-6xl   scale-[-1] top-60 -z-1  '/>
<ShadowSvg className='shadow  absolute left-0 z-50  w-80 sm:w-1/2 -top-80 sm:-top-20 z-1'/>
</div>
<Api/>
<div className="relative  ">
<ShadowSvg className='  absolute left-0 z-50 top-80 sm:top-44 w-80 sm:w-2xl  md:w-3xl '/>
  <ShadowSvg className='  absolute right-0     scale-[-1] top-250 md:top-120  '/>

</div>
<Client/>


<Information/>

<Footer/>
</div>
    </div>
  )
}
