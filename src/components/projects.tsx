import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";

export default function Projects() {
    return (
        <>    
      
<div className="flex xl:gap-52 lg:gap-10 justify-between">
        <h1 className="name-effect  
        xxs:text-[30px] 
        xs:text-[40px]
         sm:text-[40px] 
         md:text-[40px] text-[#3939e8] font-extrabold lg:pl-[20px] 
          xxs:pl-2 xl:text-[50px] lg:text-[38px]
lg:ml-[0px] 
          xl:ml-[50px] realtive z-1
         " >SABIHA<span className="text-transparent"
        
              style={{
               
                  WebkitTextStroke: '2px black',
                  fontFamily:'franklin-gothic-urw, sans-serif',
              
              
              }}>SULTANA</span></h1>
              <ul className="flex gap-10 hidden  lg:flex lg:block xl:gap-10  text-black  
              font-bold text-lg  xl:mt-7 xl:mr-[130px] lg:mr-[80px] mt-7 lg:mt-4 ">
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
            </ul>
              
              
              <Sheet>
  <SheetTrigger className="block lg:hidden md:pr-10 xxs:pr-2"><Menu className="mt-5 text-white xxs:w-8 xxs:h-8 xs:w-10 xs:h-10 md:w-10 md:h-10" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle> <ul className="text-[20px]  mt-[50px]">
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
        </ul></SheetTitle>
      <SheetDescription>
      Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
              </div>
              <div className="">
              <div className="h-[6px] bg-gradient-to-r from-[#4545b0] to-[#5d81f5] w-full absolute top-[65px]"></div>

<div className="flex justify-around gap-[60px] bg-gradient-to-b from-[#26085d] to-[#031b68]
  text-white w-[1200px] ml-[150px] mt-[150px] rounded-[10px] h-[200px]">
              <h3 className=" text-[50px] font-bold mt-[40px] ml-[0px]" >Take a Look <br /> At My Projects</h3>
              <p className="text-[18px] w-[500px] mt-[60px]  mr-[200px]">I'm good at what we do. I've got years of experience designing that convert visitors into customers.
                 Want proof? Check out some examples of my work below!</p>
                 <div className="flow"></div>
                 </div>
              <div className="projectsDiv flex justify-center gap-[10px] mt-[80px]">
                <div className="p1"></div>
                <div className="p2"></div>
             
              </div>
              <div className="projectsDiv flex justify-center gap-[10px] mt-[30px]">
                <div className="p3"></div>
                <div className="p4"></div>
             
              </div>
              <div className="projectsDiv flex justify-center gap-[10px] mt-[30px]">
                <div className="p5"></div>
                <div className="p6"></div>
             
              </div>
              </div>
          
              </>
    )
}