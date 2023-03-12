import { useStepper } from "@/store/steps";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Stepper from "./stepper";

const FormWrapper = () => {

  const {setStep,step} = useStepper();
  const handelNext=()=>{
            if(step<3){
                setStep(step+1)
            }
  }

  const handelBack=()=>{
        if(step>1){
            setStep(step-1)
        }
  }
  return (
    <section className="flex flex-col text-white flex-wrap  ">
      <div className="w-full  max-w-xl flex flex-col shadow-xl min-h-[calc(100vh-8rem)] mx-auto h-full pt-10">
       
      {step==1&&  <Step1 />}
      {step==2&&  <Step2 />}
      {step==3&&  <Step3 />}
        <div className="h-20  px-5 pl-2 flex items-center justify-between  w-full">
          <div className="text-white  flex flex-col px-2    items-center">
           <button onClick={handelBack} disabled={step==1} className='disabled:cursor-not-allowed'>

            <svg
            
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-12 h-12 hover:-translate-x-2 hover:cursor-pointer transition-all ease-in-out duration-100  "
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
            </svg>
                </button>
          </div>
          <div className="">
          <button onClick={handelNext} disabled={step==3} className=" border disabled:cursor-not-allowed hover:scale-105 active:scale-95 px-4 py-1   rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>



      <div className="w-fit  mx-auto mt-auto mb-10">
        <Stepper />
      </div>
    </section>
  );
};

export default FormWrapper;
