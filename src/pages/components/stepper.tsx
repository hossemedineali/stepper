import { useStepper } from "@/store/steps";

const Stepper = () => {

const {step}=useStepper()
return ( <div>
        

        <ol className=" items-center w-full flex   sm:flex sm:space-x-8 sm:space-y-0">

    <li className={`flex items-center text-white border border-gray-500 rounded-full space-x-2.5 ${step==1?'font-extrabold ':''}`}>
        <span className="flex items-center justify-center w-8 h-8  shrink-0 border-gray-400">
            1
        </span>
       
    </li>
    <li className={`flex items-center text-white border border-gray-500 rounded-full space-x-2.5 ${step==2?'font-extrabold ':''}`}>
        <span className="flex items-center justify-center w-8 h-8  shrink-0 dark:border-gray-400">
            2
        </span>
       
    </li>
    <li className={`flex items-center text-white border border-gray-500 rounded-full space-x-2.5 ${step==3?'font-extrabold ':''}`}>
        <span className="flex items-center justify-center w-8 h-8  shrink-0 dark:border-gray-400">
            3
        </span>
       
    </li>
    
</ol>


    </div> );
}
 
export default Stepper;