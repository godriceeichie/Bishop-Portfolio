"use client";
import React from "react";
import contactImg from "../../public/img/Contact us-amico.png";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/validation/contactForm";
import { Button } from "@chakra-ui/react";
import client from "@/sanity/sanity.client";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });
  const submitData: SubmitHandler<Inputs> = async (data, e) => {
    e?.preventDefault();
    console.log(data);
    let token =
      "sk3Lv9k9IpxALPfNZsiQyknYGmbjO5FLfnQIphoQ3rIseJPWf7nFb7ifbYPSeYB5nbCQmfTbEYILyNUVTUYYf06orBIqbFPmMZe3Rf3ge0dosqcprgTGW3oNeJ7ZcLrME5qJv3mLP6eNoKlKN8getlW0jcZBbqk2PNonh5eGM9vyM26Jo1Jo";
    let projectId = "14gp8bl9";
    const mutations = [{
      "patch": {
        "query": "*[_type == 'contactForm']",
        "set":{
          "name": data.name,
          "email": data.email,
          "phoneNumber": data.phoneNumber,
          "message": data.message
        }
      }
    }]
    await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/production/`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations }),
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  };
  return (
    <div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 bg-white p-8 relative z-10 rounded-lg">
        <div className="flex flex-col gap-6">
          <header className="gap-3">
            <h2 className="text-2xl font-bold text-[#001D78]">Get In Touch</h2>
            <p className="text-gray-500">
              Contact via email, phone or through our web form
            </p>
          </header>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(submitData)}
          >
            <div>
              <input
                type="text"
                className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm"
                placeholder="Enter your name"
                id="name"
                disabled={isSubmitting}
                {...register("name")}
              />
              {errors.name?.message && <div>{errors.name?.message}</div>}
            </div>
            <div>
              <input
                type="email"
                className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm"
                placeholder="Enter your email"
                id="email"
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.name?.message && <div>{errors.email?.message}</div>}
            </div>
            <div>
              <input
                type="number"
                className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm"
                placeholder="Enter your phone number"
                id="phoneNumber"
                disabled={isSubmitting}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber?.message && (
                <div>{errors.phoneNumber?.message}</div>
              )}
            </div>
            <div>
              <textarea
                className="bg-[#E9EFFF] px-4 py-3 w-full rounded-md placeholder:text-sm"
                cols={30}
                rows={4}
                placeholder="Write your message"
                id="message"
                disabled={isSubmitting}
                {...register("message")}
              ></textarea>
              {errors.message?.message && <div>{errors.message?.message}</div>}
            </div>
            {isSubmitting ? (
              <Button
                isLoading
                loadingText="Submitting"
                variant="outline"
                className="border-[#001D78]"
              >
                Submit
              </Button>
            ) : (
              <button className="bg-accent-color text-white py-2 rounded-lg bg-primary-color">
                Submit
              </button>
            )}
          </form>
        </div>
        <div className="flex flex-col items-center gap-7">
          <Image
            src={contactImg}
            alt={"Contact illustration image"}
            width={280}
            // objectFit={"cover"}
            className="max-w-full"
          />
          <ul className="px-10 flex flex-col items-start gap-4">
            <li className="flex items-center gap-3 text-gray-600">
              <span className="rounded-full border p-2">
                <FaMapMarkerAlt className="text-primary-color" />
              </span>
              <span className="w-fit">
                Km. 1 Eleme Road, Eleme Junction, Port Harcourt, Nigeria.
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <span className="rounded-full border p-2">
                <BsFillTelephoneFill className="text-primary-color" />
              </span>
              <span className="w-fit">+2348033125477</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <span className="rounded-full border p-2">
                <GrMail className="text-primary-color" />
              </span>
              <span className="w-fit">logospastor@yahoo.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
