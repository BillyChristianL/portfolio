
import React, { useState } from 'react'

import { IoIosSend } from "react-icons/io";
const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Add this type assertion:
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
  
    // Rest of your code remains the same...
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
    if (!accessKey) {
      setResult("Error: Missing access key");
      return;
    }
    formData.append("access_key", accessKey);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset(); 
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Failed to submit form");
    }

  }
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-serif'>
            Get in touch
        </h4>
        <h2 className='text-center text-5xl font-serif'>
            Contact Me
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
          Should you have any feedback or comments, please feel free to share them by filling out the form.
        </p>

        <form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'>
            <div className='grid grid-auto-fit gap-6 mt-10 mb-8 '>
                <input type="text" name='name' placeholder='enter your name' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <input type="email" name='email' placeholder='enter your email'  required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            </div>
            <textarea rows={6} name="message" id="" placeholder='enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 '></textarea>
            <button 
              type='submit'
              className="flex flex-row w-max mx-auto text-xl justify-between items-center gap-2 px-8 py-0.5 rounded-md border-2 border-black white:border-white font-semibold bg-white text-black transition-all duration-200 text-sm 
                        shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                        white:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                        hover:bg-gray-100 
                        active:bg-gray-200 active:translate-y-1 active:shadow-[0px_0px_rgba(0,0,0)] active:white:shadow-[0px_0px_rgba(255,255,255)]">
                        Submit 

                        <IoIosSend className='size-5' />
            </button>
            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact