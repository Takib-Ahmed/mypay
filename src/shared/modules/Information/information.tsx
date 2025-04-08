
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

    
    <div className="min-h-screen flex items-center justify-center  text-white  relative">



<div  className=" absolute left-0 top-0 ">
   <Image width={1000} height={1000} className=" w-70" src={'/planet (1).svg'}></Image>
</div>
      <form className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-lg">
        {fields.map((field, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-sm font-semibold uppercase mb-2">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              className="gradient-input text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-200 shadow-lg"
          >
            Envoyer
            <span className="text-xl">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
}
