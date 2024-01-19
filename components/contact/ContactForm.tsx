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
import { Button, useToast } from "@chakra-ui/react";
import client from "@/sanity/sanity.client";
import { ContactInputs, MutationType } from "@/types";
import { useSubmit } from "@/hooks/useSubmit";

const ContactForm = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInputs>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",

    },
    resolver: zodResolver(contactFormSchema),
  });
  const submitData: SubmitHandler<ContactInputs> = async (data, e) => {
    e?.preventDefault();
    const recipient = "contact@bishopisijola.org";
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(data.message);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
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
                className={`bg-[#E9EFFF] px-4 py-3 w-full rounded-md active:outline outline-[#225fbb]  ${
                  errors.name?.message && "border border-red-500"
                } placeholder:text-sm`}
                placeholder="Enter your name"
                id="name"
                disabled={isSubmitting}
                {...register("name")}
              />
              {errors.name?.message && (
                <div className="text-red-500">{errors.name?.message}</div>
              )}
            </div>
            <div>
              <input
                type="email"
                className={`bg-[#E9EFFF] px-4 py-3 w-full rounded-md active:outline outline-[#225fbb] ${
                  errors.email?.message && "border border-red-500"
                } placeholder:text-sm`}
                placeholder="Enter your email"
                id="email"
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.email?.message && (
                <div className="text-red-500">{errors.email?.message}</div>
              )}
            </div>
            <div>
              <input
                type="tel"
                className={`bg-[#E9EFFF] px-4 py-3 w-full rounded-md active:outline outline-[#225fbb] ${
                  errors.phoneNumber?.message && "border border-red-500"
                } placeholder:text-sm`}
                placeholder="Enter your phone number"
                id="phoneNumber"
                disabled={isSubmitting}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber?.message && (
                <div className="text-red-500">
                  {errors.phoneNumber?.message}
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                className={`bg-[#E9EFFF] px-4 py-3 w-full rounded-md active:outline outline-[#225fbb] ${
                  errors.subject?.message && "border border-red-500"
                } placeholder:text-sm`}
                placeholder="Enter your subject"
                id="subject"
                disabled={isSubmitting}
                {...register("subject")}
              />
              {errors.subject?.message && (
                <div className="text-red-500">
                  {errors.subject?.message}
                </div>
              )}
            </div>
            <div>
              <textarea
                className={`bg-[#E9EFFF] px-4 py-3 w-full rounded-md active:outline outline-[#225fbb] ${
                  errors.message?.message && "border border-red-500"
                } placeholder:text-sm`}
                cols={30}
                rows={4}
                placeholder="Write your message"
                id="message"
                disabled={isSubmitting}
                {...register("message")}
              ></textarea>
              {errors.message?.message && (
                <div className="text-red-500">{errors.message?.message}</div>
              )}
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
              <button className=" text-white py-2 rounded-lg bg-primary-color hover:bg-[#276bd3]">
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
              <span className="w-fit">contact@bishopisijola.org</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
