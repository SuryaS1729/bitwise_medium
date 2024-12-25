
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export const Quote = ()=>{
    return <div className="bg-pink-800 h-screen flex justify-center flex-col ">

        <div className="flex justify-center px-4 ">
            <div className="max-w-lg"> 
                 <div className=" text-3xl font-bold text-pink-50">“This platform gave me the confidence to share my voice and connect with amazing women.”
                 </div> 
                 <div className="text-xl text-pink-300 font-semibold max-w-md mt-4"> Kris jenner</div>
                <div className="text-sm font-light max-w-md text-pink-200"> Student | Stanford</div>
               <div className='bg-pink-400 shadow-lg shadow-cyan-500/50  rounded-3xl border-8 border- mt-10'> <DotLottieReact
      src="https://lottie.host/11c65e1b-61c2-4c62-a792-b829228f7b2c/hEH8tw0i8W.lottie"
      loop
      autoplay
    /></div>
             </div>
        </div>
      
    </div>
}



