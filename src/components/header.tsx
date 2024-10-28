"use client"
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
import { useEffect, useRef } from 'react';
// first we have to run this command npm install typed.js
import Typed from 'typed.js';

export default function Header() {
  const autoTypeRef = useRef(null);
  // cards
  
      useEffect(() => {
        if (autoTypeRef.current) {
          const typed = new Typed(autoTypeRef.current, {
            strings: ["Web Design", "Branding", "Ecommerce"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
          });
    
          return () => {
            typed.destroy();
          };
        }
      }, []);




    return (
        <div className="bubble-container h-screen w-full relative z-[-1] bg-gradient-to-b from-[#26085d] to-[#031b68] overflow-hidden">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
            <div className="bubble bubble6"></div>
            <div className="header max-w-screen-2xl
                           relative z-10 flex
                       
                            justify-between px-10 
                            items-center
                        
                        
                    
                      ">
         <h1 className="name-effect  mt-5 
          xxs:text-[30px] 
          xs:text-[40px]
           sm:text-[40px] 
           md:text-[40px] text-white font-bold " >SABIHA<span className="text-transparent"
                style={{
                    WebkitTextStroke: '2px #ffffff',
                    fontFamily:'franklin-gothic-urw, sans-serif'
                
                }}>SULTANA</span></h1>
                <ul className="flex gap-10 hidden  lg:flex lg:block lg:gap-7  text-white text-xl mt-4 cursor-pointer"><li><Link href="/">Home</Link></li>
                <li> <Link href="/about">About</Link></li>
                <li><Link href="/about">Contact</Link></li> 
                <li><Link href="/about">Services</Link></li>
                <li><Link href="/about">Pricing</Link></li></ul><Sheet>
  <SheetTrigger className="block lg:hidden"><Menu className="mt-5 text-white xxs:w-8 xxs:h-8 xs:w-10 xs:h-10 md:w-10 md:h-10" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

           </div>
           <section className=" lg:mt-[120px] sm:w-[500px] relative z-1 2xl:ml-[150px] xl:ml-[150px] lg:ml-[80px] md:ml-[50px]
            xxs:ml-[30px]  sm:mt-[20px]   xxs: mt-[15px]  ">

<h1 className="text-white lg:text-[68px] lg:leading-[80px] font-bold sm:text-[50px] xxs:text-[40px] xxs:leading-[60px] " style={{fontFamily:'franklin-gothic-urw, sans-serif'}}> I Provide Flexible  <h1 ref={autoTypeRef} className="auto-type inline"> </h1> <span className="auto-type"></span> Solutions
 <p className=" text-[20px] mt-[20px] font-light leading-[35px] "style={{fontFamily:'franklin-gothic-urw, sans-serif'}}>
  Big ideas, tailored solutions. Flexible approaches to meet your unique needs.</p></h1>
 
 

    
</section>
<button className="h-[55px] w-[220px] text-white bg-gradient-to-b from-[#fc4f6c] to-[#e60b87] text-[18px] rounded-[40px] lg: mt-[20px] font-light text-center ml-[200px]  xxs:mt-[20px] sm:ml-[200px]  xxs:ml-[100px]  relative z-1">Lets Get Started </button>



{/* cards */}
<div className="carousel absolute  z-1 xl:left-[720px] lg:left-[650px] lg:top-[300px] xxs:top-[600px]
 xxs:left-[10px] }">
        <div className="cards-container">
            <div className="card ">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
             




            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
            <div className="card">
                <div className='cimg1 cimg'></div>
                <div className='ctext1'>Website Development</div>
            </div>

            <div className="card">
                 <div className='cimg2 cimg'></div>
                 <div className='ctext1'>Ecommerce Development</div>
            </div>

            <div className="card"> 
                <div className='cimg3 cimg'></div>
                <div className='ctext1'>Digital Marketing</div>
            </div>
            
            <div className="card"> 
                <div className='cimg4 cimg'></div>
                <div className='ctext1'>Branding Solution</div>
            </div>
        </div>
    </div>
    




    <div className="circle absolute top-[100px] left-[500px] h-[600px] w-[600px] border-l-2 border-[#5306ec] rounded-full "></div>
    <div className="circle1 absolute top-[100px] left-[900px] h-[600px] w-[600px] border-l-2 border-[#5306ec] rounded-full"></div>


        </div>
    )}



    // xxs:bg-green-500
    // xs:bg-yellow-500
    // sm:bg-red-500
    // md:bg-blue-500
    // lg:bg-black
    // xl:bg-purple-500
    // 2xl:bg-pink-500
   









//    