import React from 'react'
import Pricingicns from '@/app/assets/icons/svgs/Pricings'
import Righticn from '@/app/assets/icons/svgs/Rignt'
import Link from 'next/link'
export default function Pricing() {
    const Pricing = [
        {
            button:'STANDARD',
            icons:Pricingicns,
            pricing:'5% + 0.25 €',
            title:'Business Acceptés :',
            benefits:[
                'Transactions e-commerce',
                "Services basés sur l'abonnement",
                "Dons en ligne pour des associations à but non lucratif",

"Paiements de réservations et de réservations",
"Vente de produits numériques"

            ],
            bottom:'Démarrer'
            
        },
        {
            button:'SUR MESURE',
            title:"Dix fonctionnalités essentielles",
            benefits:[
                "Transactions Sécurisées",
                "Support Multi-Devises",
                "Protection contre la Fraude",
                "Paiement Personnalisable",
                "Interface Adaptée aux Mobiles",
                "Transactions Sécurisées",
                "Support Multi-Devises",
                "Protection contre la Fraude",
                "Paiement Personnalisable",
                "Interface Adaptée aux Mobiles"]
            
        }
    ]
  return (
    <div>
       <div className="flex flex-wrap lg:flex-nowrap  w-full gap-10 lg:gap-0  items-center  justify-center px-5  py-20  text-white">
        {
            Pricing.map((value,key)=>(
                <div className={` ${key==1 ?'  bg-gradient-image overflow-hidden  w-xl justify-center items-center lg:w-auto   rounded-xl  lg:-translate-y-2.5 lg:-translate-x-2.5 lg:px-14  p-8 pt-8  min-[1250px]:px-24  min-[1250px]h-[40rem]':"pt-8 h-fit flex flex-col gap-7  overflow-hidden  w-xl    lg:w-3xl  min-[1250px]:w-3xl bg-white/20  bg-cover z-50 rounded-xl  brigthness-50 border-3 border-[#4b85fc] element "}
                
                
                
                
                
                
                `} key={key}>
<div className={` flex flex-col items-center  gap-3.5 lg:gap-5   ${key===0 && '    min-[1250px]:px-52'}`}>
<Link href='#'  className=' px-8 py-3 bg-gradient  rounded-full text-black z-50  '>
{value.button}</Link>
{
    value.icons && <div>
       <value.icons/>
    </div>
}


<div className=' text-4xl lg:text-5xl min-[1250px]:text-6xl font-bold  bg-text-gradient z-50'>
    {
        value.pricing
    }
</div></div>
<div  className={` flex flex-col z-50 ${key===0 ? '  px-5  lg:pe-28  md:px-10 items-center md:items-start ':"  sm:items-center lg:items-start"}`}>
<ul className=' flex flex-col gap-3   lg:gap-4 z-50'>
    <li className={`font-bold ${key==1 && ' sm:text-center  bg-text-gradient'}`} >{value.title}</li>
    {value.benefits.map((benefit,key)=>(
        <li key={key} className=' flex gap-1 items-center'><span><Righticn className=' md:w-[75%]'/></span>{benefit}</li>
    ))}
</ul>

</div>
{
    value.bottom && <center className=' w-full mt-9  py-5 bg-[#07111E]  rounded-xl' >
    {
        value.bottom
    }
</center>
}

                </div>
            ))
        }
       </div>
    </div>
  )
}
