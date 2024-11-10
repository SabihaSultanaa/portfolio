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

export default function Contact() {
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
              <li className="watsapp" ><Link href="  https://wa.me/+923482381740  target= _blank rel=noopener noreferrer"  ></Link></li>
              <li className="linkedin"><Link href="https://www.linkedin.com/in/sabiha-sultana-52abaa222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app target= _blank rel=noopener noreferrer"  ></Link></li>
              <li className="github" ><Link href="https://github.com/SabihaSultanaa target= _blank rel=noopener noreferrer" ></Link></li>
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
              <li className="watsapp" ><Link href="https://wa.me/+923482381740  " ><a href="target= _blank rel=noopener noreferrer"></a></Link></li>
              <li className="linkedin"><Link href="https://www.linkedin.com/in/sabiha-sultana-52abaa222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app target= _blank rel=noopener noreferrer"  ></Link></li>
              <li className="github" ><Link href="https://github.com/SabihaSultanaa target= _blank rel=noopener noreferrer" ></Link></li></ul></SheetTitle>
      <SheetDescription>
      Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
              </div>
              <div className="h-[6px] bg-gradient-to-r from-[#4545b0] to-[#5d81f5] w-full absolute top-[65px]"></div>
              <div className="contact flex gap-[100px]">
              <div className="contact-text ml-[150px] mt-[70px]">
          <h3 className="text-[30px] font-bold text-pink-500">Contact Now</h3>
      <h2 className="text-[40px] font-bold"> Have Question? <br /> Write a Message</h2>

    <input type="text" name="" placeholder="Full Name" className="contact-input  w-[500px] h-[50px] pl-[10px] text-[20px] mt-[20px] 
    border-2 border-black placeholder:text-black
    "/> <br /> 
   

    <input type="text" name="" placeholder="Email Address" className="contact-input w-[500px] h-[50px] pl-[10px] text-[20px] mt-[15px] border-2 border-black placeholder:text-black "/> <br /> 
    <input type="text" name="" placeholder="Contact Number" className="contact-input w-[500px] h-[50px] pl-[10px] text-[20px] mt-[15px]  border-2 border-black placeholder:text-black"/> <br /> 
    <textarea name="messgae" id="message" placeholder="Message" className="contact-input  w-[500px] h-[100px] pl-[10px] text-[20px] mt-[15px]  border-2 border-black placeholder:text-black "></textarea> <br />
<button className="bg-pink-600 text-white w-[500px] h-[50px] rounded-[30px] mt-[15px]  text-[20px] hover:bg-pink-700">Submit</button>
            </div>
          
        <div className="contact-img "></div>
            </div>
              </>
    )
}