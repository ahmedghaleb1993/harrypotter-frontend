"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchWizard } from "@/app/action";
import WizardCard from "./WizardCard";



let page: number = 2;

export type WizardCard = JSX.Element;
const LoadMore = () => {
    const { ref, inView } = useInView()
    const [data, setData] = useState<WizardCard[]>([])
    useEffect(()=>{
        if(inView && data.length < 11){
            fetchWizard(page).then((res)=>{
                setData([...data, ...res])
                page++;
                console.log(data.length)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[inView, data])
    
    
    return ( <>
    
    <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 '>
      { data }
    </section>
    
    <section className="flex justify-center items-center w-full">
        <div ref={ref}>
            {
                data.length < 11 &&(
                    <Image
                    src="./spinner.svg"
                    alt="load more"
                    width={56}
                    height={56}
                    className="object-contain"
                    />
                )
            }
            
        </div>
    </section> 
    </>
    );
}
 
export default LoadMore;