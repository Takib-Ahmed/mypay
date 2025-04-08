
import Hero from '@/shared/modules/hero'
import Pricing from '@/shared/modules/pricing/pricing'
import React from 'react'
import Api from '@/shared/modules/API/Api'
import Client from '@/shared/modules/clients/clientcm'
import Information from '@/shared/modules/Information/information'
import Visaicn from './assets/icons/svgs/Visa'
import MasterCardicn from './assets/icons/svgs/MasterCard'
import Paypalicn from './assets/icons/svgs/Paypal'
import ApplePayicn from './assets/icons/svgs/ApplePayicn'
import Gpayicn from './assets/icons/svgs/Gpay'
import ShadowSvg from './assets/icons/svgs/Shadow'
import Footer from '@/shared/modules/Footer/footer'

export default function Page() {
  return (
    <div>
      <Hero/>
 

<div className=' bg-gradient2'>

<Pricing/>

<Api/>
<div className="relative  ">

  <ShadowSvg className='  absolute right-0     scale-[-1] top-80  '/>
  <ShadowSvg className='  absolute left-0 z-50  hidden  md:block'/>
</div>
<Client/>


<Information/>

<Footer/>
</div>
    </div>
  )
}
