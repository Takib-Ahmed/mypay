
import ApplePayicn from '@/app/assets/icons/svgs/ApplePayicn';
import Gpayicn from '@/app/assets/icons/svgs/Gpay';
import Commencer from '@/app/assets/icons/svgs/linkicon';
import MasterCardicn from '@/app/assets/icons/svgs/MasterCard';
import Paypalicn from '@/app/assets/icons/svgs/Paypal';
import Platforms from '@/app/assets/icons/svgs/platforms'
import Visaicn from '@/app/assets/icons/svgs/Visa';
import Button from '@/shared/components/Button';

export default function Api(){
    return (
        
        
        <><div  className=' flex flex-wrap lg:flex-nowrap  px-5   lg:px-0  items-center  min-[700px]:gap-5  justify-center sm:gap-10 sm:gap-52 sm:py-14' >


            <div className="texts  text-2xl sm:text-3xl  md:text-4xl   flex flex-col sm:gap-5 lg:mt-5   lg:w-[35%]  leading-10  sm:leading-[50.5px]  md:leading-[60.5px]">
            Nous disposons d’une api solide fait pour s’intégrer au mieux à votre environnement.

                  <div className="button">
                    <Button>VOIR l’API</Button>
                      </div>
            </div>
            <div className=' flex w-full md:w-auto items-center  justify-center'>
<Platforms className=' max-[700px]:w-[70%]  max-[1024px]:w-full  min-[1100px]:w-[70%]   min-[1200px]:w-full '/>
            </div>
        </div>

        <div className=" flex-col  z-50">
  
  <center className=" z-80  text-4xl px-3 sm:px-3.5 md:px-4 lg:px-5 ">
  Nos clients
        </center>
        <div className="flex h-full px-5 gap-5 md:gap-12 md:gap-0 w-screen items-center py-10  sm:py-16 pb-0 md:pb-0  lg:py-20 justify-around z-50">
  
  
  
          <div> 
  <Visaicn  className='w-full'/>
           
          </div>
          <div>
  
           <MasterCardicn  className='w-full'/> 
          </div>
          <div>
            <Paypalicn  className='w-full'/>


          </div>
          <div>
            <ApplePayicn className='w-full'/>
          </div>
          <div>
            <Gpayicn className='w-full'/>

          </div>
        </div>
        
  </div>
        </>
        
    );
}