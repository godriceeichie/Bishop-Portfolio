import React from "react";
import contactImg from '../../../public/img/Contact us-amico.png'
import Image from "next/image";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const ContactForm = () => {
  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 bg-white p-8 relative z-10 rounded-lg">
        <div className="flex flex-col gap-6">
          <header className="gap-3">
            <h2 className="text-2xl font-bold text-[#001D78]">Get In Touch</h2>
            <p className="text-gray-500">Contact via email, phone or through our web form</p>
          </header>
          <form action="" className="flex flex-col gap-4">
            <input type="text" className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm" placeholder="Enter your name"/>
            <input type="email" className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm" placeholder="Enter your email"/>
            <input type="number" className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm" placeholder="Enter your phone number"/>
            <textarea className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm" cols={30} rows={5} placeholder="Write your message"></textarea>
            <button className="bg-accent-color text-white py-2 rounded-lg bg-primary-color">Submit</button>
          </form>
        </div>
        <div className="flex flex-col items-center gap-7">
            <Image src={contactImg} alt={'Contact illustration image'} width={280} objectFit={'cover'} className="max-w-full"/>
            <ul className="px-10 flex flex-col items-start gap-4">
                <li className="flex items-center gap-3 text-gray-600" >
                    <span className="rounded-full border p-2">
                        <FaMapMarkerAlt className="text-primary-color"/>
                    </span>
                    <span className="w-fit">
                        Km. 1 Eleme Road, Eleme Junction, Port Harcourt, Nigeria.
                    </span>
                </li>
                <li className="flex items-center gap-3 text-gray-600" >
                    <span className="rounded-full border p-2">
                        <BsFillTelephoneFill className="text-primary-color"/>
                    </span>
                    <span className="w-fit">
                        +2348033125477
                    </span>
                </li>
                <li className="flex items-center gap-3 text-gray-600" >
                    <span className="rounded-full border p-2">
                        <GrMail className="text-primary-color"/>
                    </span>
                    <span className="w-fit">
                        logospastor@yahoo.com
                    </span>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
