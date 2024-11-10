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

export default function Section() {
    return (
        <>    
      {/* xxs:bg-red-500 xs:bg-yellow-500
 sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500 xl:bg-orange-400
  2xl:bg-red-300 max-w-screen-2xl  */}
<div className="flex xl:gap-52 lg:gap-10 justify-between ">
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
              <div className="h-[6px] bg-gradient-to-r from-[#4545b0] to-[#5d81f5] w-full absolute top-[65px]">
            
              </div>
        <div className="flex ml-[0px]  " style={{fontFamily:'franklin-gothic-urw, sans-serif'}}>
            <div className="tailored xl:w-[900px] lg:w-[580px] xs:w-[500px] md:ml-[100px]
             mt-[40px] lg:ml-[300px] text-center text-[25px] 2xl:ml-[280px] xl:ml-[200px] xxs:ml-[20px]">
            <h4 className="text-[#3939e8]  font-bold lg:mt-[30px] " >WHO I AM</h4>
            <h1 className=" font-bold xl:text-[45px] lg:text-[30px] text-gray-800 xl:leading-[55px] xxs:leading-[35px] xxs:mt-[20px] ">Web Development and Design Tailored To Your Specifications</h1>
            <p className=" xl:mt-6 text-[18px] text-gray-800 font-bold lg:text-center xl:w-[750px] xl:ml-[75px] xxs:mt-[20px]  ">
               Hi, I'm Sabiha Sultana, I specialize in building responsive, intuitive, and visually stunning web applications using modern technologies. I am committed to
                assisting businesses in expanding through unique web design and development strategies using cutting-edge web development 
                technology. Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.


              
              
            </p>
          
            </div>
            {/* <div className="timg"></div> */}
        </div>
        <aside className="bg-gradient-to-b from-[#26085d] to-[#031b68] md:w-[500px] lg:ml-[330px] 
          xl:h-[240px] lg:h-[600px] text-white xl:w-[1160px] 
          2xl:ml-[190px]  xl:ml-[100px] rounded-[10px] absolute lg:top-[500px] xl:top-[460px]  xxs:h-[600px]  xxs:ml-[100px] xxs:mt-[30px]">
        <h1 className="text-[30px] ml-10 mt-[12px] font-bold">Proficiencies</h1>
          <div className="flex lg:flex-col xl:flex-row  xxs:flex-col xxs:h-[410px] xxs:gap-[20px] xl:gap-[0px]">
         
              <ul className="item">Programming Languages
              
                <li className="js"></li>
                <li className="mt-3 java">JavaScript</li>
                <li className="ts"></li>
                <li className="type">TypeScript</li>
                <li className="html"></li>
                <li className="ht">HTML5</li>
              </ul>

              <ul className="item">Frameworks
                <li className="nextjs "></li>
                <li className="mt-3 next">Next.js</li>
                <li className="react"></li>
                <li className="re">React</li>
                <li className="node"></li>
                <li className="no">Node.js</li>
               </ul>
             
               
                
          
              <ul className="item">Styling
              <li className="css"></li>
                <li className="mt-3 cs">CSS3</li>
                <li className="tail"></li>
                <li className="t">Tailwind</li>
                <li className="shad"></li>
                <li className="sh" >Shadcn</li>
             
             
              </ul >
              <ul className="item">Tools & Software
              <li className="git"></li>
                <li className="mt-3 vcg"> Version Control Git</li>
                <li className="vs"></li>
                <li className="code">Visual Studio Code</li>
                <li className="res"></li>
             <li className="r"> Responsive Website</li>
          
             
              </ul>
          </div>
          <div className="bulb"></div>
        </aside>
        </>
    );
}
