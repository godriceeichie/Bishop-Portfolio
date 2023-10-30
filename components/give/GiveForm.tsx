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

const GiveForm = () => {
  const [currency, setCurrency] = useState<String | React.Key>(
    "Select a currency"
  );
  return (
    <section className="py-20 px-3">
      <form className="w-full max-w-lg mx-auto shadow-lg rounded-lg py-4 px-8">
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
              name=""
              id="full-name"
              className="bg-[#E9EFFF] rounded-sm py-2 px-3 active:outline outline-[#225fbb] placeholder:text-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="full-name" className="flex items-center">
              Amount
              <span className="text-red-600"> *</span>
            </label>
            <input
              type="number"
              name=""
              id="full-name"
              className="bg-[#E9EFFF] rounded-sm py-2 px-3 active:outline outline-[#225fbb] placeholder:text-sm"
              placeholder="Enter amount"
            />
          </div>

          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="rounded border bg-[#E9EFFF] text-base"
              >
                {`${currency}`}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => setCurrency(key.toString())}
            >
              <DropdownItem key="USD">United States Dollars (USD)</DropdownItem>
              <DropdownItem key="NGN">Nigerian Naira (NGN)</DropdownItem>
              <DropdownItem key="EUR">European Euro (EUR)</DropdownItem>
              <DropdownItem key="GBP">Great Britain Pounds (GBP)</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="flex items-center">
              Email Address
              <span className="text-red-600"> *</span>
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="bg-[#E9EFFF] rounded-sm py-2 px-3 placeholder:text-sm active:outline outline-[#225fbb]"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="full-name">Additional Information</label>
            <textarea
              cols={30}
              rows={4}
              className="bg-[#E9EFFF] py-2 px-3 w-full rounded-sm active:outline outline-[#225fbb] placeholder:text-sm"
              placeholder="Enter any additional information e.g. bishop seed,etc."
            ></textarea>
          </div>
        </div>
        <button className="mt-7 inline-block w-full text-white py-2 rounded-lg bg-accent-color hover:bg-[#DF3B5F]">
          Submit
        </button>
      </form>
    </section>
  );
};

export default GiveForm;
