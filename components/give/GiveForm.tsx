"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import CTABtn from "../CTABtn";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiveInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { giveForm } from "@/validation/giveForm";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";
import useFlutterwavePayment from "@/hooks/useFlutterwavePayment";

const GiveForm = () => {
  const [currency, setCurrency] = useState<String | React.Key>(
    "Select a currency"
  );

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<GiveInputs>({
    defaultValues: {
      fullName: "",
      amount: "",
      currency: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(giveForm),
  });

  
  const submitData: SubmitHandler<GiveInputs> = (data, e) => {
    e?.preventDefault();
    console.log(data);

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };
  let config: FlutterwaveConfig = {
    public_key: process.env.FLUTTERWAVE_API_KEY!,
    tx_ref: Date.now().toString(),
    amount: parseInt(getValues("amount")),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: getValues("email"),
      phone_number: "08068578933",
      name: getValues("fullName"),
    },
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const {initiatePayment, data} = useFlutterwavePayment()
  return (
    <section className="py-20 px-3">
      <form
        className="w-full max-w-lg mx-auto shadow-lg rounded-lg py-4 md:py-6 px-4 md:px-8"
        
      >
        <h2 className="font-semibold text-lg border-b">Personal Information</h2>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="full-name"
              className="flex items-center font-medium"
            >
              Full Name
              <span className="text-red-600"> *</span>
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              id="full-name"
              className={`${
                errors.fullName?.message && "border border-red-500"
              } bg-[#E9EFFF] rounded-sm py-2 px-3 active:outline outline-[#225fbb] placeholder:text-sm`}
              placeholder="Enter your full name"
              {...register("fullName")}
            />
            {errors.fullName?.message && (
              <div className="text-red-500">{errors.fullName?.message}</div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="amount" className="flex items-center">
              Amount
              <span className="text-red-600"> *</span>
            </label>
            <input
              type="number"
              id="amount"
              disabled={isSubmitting}
              className={`${
                errors.amount?.message && "border border-red-500"
              } bg-[#E9EFFF] rounded-sm py-2 px-3 active:outline outline-[#225fbb] placeholder:text-sm`}
              placeholder="Enter amount"
              {...register("amount")}
            />
            {errors.amount?.message && (
              <div className="text-red-500">{errors.amount?.message}</div>
            )}
          </div>

          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className={`rounded border bg-[#E9EFFF] text-base ${
                  errors.currency?.message && "border border-red-500"
                }`}
              >
                {`${currency}`}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => {
                setValue("currency", key.toString());
                setCurrency(key.toString());
              }}
            >
              <DropdownItem key="USD">United States Dollars (USD)</DropdownItem>
              <DropdownItem key="NGN">Nigerian Naira (NGN)</DropdownItem>
              <DropdownItem key="EUR">European Euro (EUR)</DropdownItem>
              <DropdownItem key="GBP">Great Britain Pounds (GBP)</DropdownItem>
            </DropdownMenu>
            {errors.currency?.message && (
              <div className="text-red-500">{errors.currency?.message}</div>
            )}
          </Dropdown>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="flex items-center">
              Email Address
              <span className="text-red-600"> *</span>
            </label>
            <input
              type="email"
              disabled={isSubmitting}
              id="email"
              className={`${
                errors.email?.message && "border border-red-500"
              } bg-[#E9EFFF] rounded-sm py-2 px-3 placeholder:text-sm active:outline outline-[#225fbb]`}
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-red-500">{errors.email?.message}</div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Additional Information</label>
            <textarea
              disabled={isSubmitting}
              id="message"
              cols={30}
              rows={4}
              className={`bg-[#E9EFFF] py-2 px-3 w-full rounded-sm active:outline outline-[#225fbb] ${
                errors.message?.message && "border border-red-500"
              } placeholder:text-sm`}
              placeholder="Enter any additional information e.g. bishop seed,etc."
              {...register("message")}
            ></textarea>
            {errors.message?.message && (
              <div className="text-red-500">{errors.message?.message}</div>
            )}
          </div>
        </div>
        <button 
          // onClick={() => {
          // handleFlutterPayment({
          //   callback: (response) => {
          //      console.log(response);
          //       closePaymentModal() // this will close the modal programmatically
          //   },
          //   onClose: () => {},
          // })}} 
          className="mt-7 inline-block w-full text-white py-2 rounded-lg bg-accent-color hover:bg-[#DF3B5F]">
          Submit
        </button>
      </form>
     
    </section>
  );
};

export default GiveForm;
