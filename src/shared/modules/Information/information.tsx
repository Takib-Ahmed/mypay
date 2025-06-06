
import Button from "@/shared/components/Button";
import Image from "next/image";
import React from "react";

type Field = {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
};

const fields: Field[] = [
  { label: "Nom", placeholder: "Votre nom", name: "lastName" },
  { label: "Prénom", placeholder: "Votre prénom", name: "firstName" },
  { label: "Email", placeholder: "email@example.com", name: "email", type: "email" },
  { label: "Nom de l’entreprise", placeholder: "Le nom de votre entreprise", name: "companyName" },
  { label: "Type de votre business", placeholder: "Type", name: "businessType" },
  { label: "SIRET", placeholder: "45637XXXXXXXX", name: "siret" },
  { label: "Chiffre d’affaire", placeholder: "1.0000.000", name: "revenue" },
  { label: "Pays", placeholder: "France", name: "country" },
  { label: "Numéro de téléphone", placeholder: "(+33) 675 763 445", name: "phone" },
];

export default function Information() {
  return (

<>

<center className='   pt-20'>
    <h1 className= ' text-xl sm:text-2xl  md:text-5xl'>Demande d’information</h1>

</center>
    <div className="min-h-screen flex items-center justify-center  text-white  relative">



<div  className=" absolute left-0 -top-24 ">
   <Image alt="worldicn" width={1000} height={1000} className=" w-70" src={'/planet (1).svg'}></Image>
</div>
      <form className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8 pt-0 rounded-lg">
        {fields.map((field, idx) => (
          <div key={idx} className="flex flex-col mb-2 px-5">
            <label className="text-sm font-semibold uppercase mb-2">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              className="gradient-input text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
   <div className=" flex items-center justify-start mt-3 ps-6">
   <Button className="  h-[70%] w-[65%]  ">
          Envoyer
          </Button>
   </div>

      </form>
    </div></>
  );
}
