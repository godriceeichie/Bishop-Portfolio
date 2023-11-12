"use client";
import { Button, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

const CTA = () => {
  const toast = useToast();
  type SubscriptionEmail = {
    email: string;
  };
  type MutationType = {
    create: {
      _type: string;
      email: string;
    };
  }[];
  const subscriptionSchema = z.object({
    email: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscriptionEmail>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(subscriptionSchema),
  });
  const submitData: SubmitHandler<SubscriptionEmail> = async (data, e) => {
    e?.preventDefault();
    const mutations: MutationType = [
      {
        create: {
          _type: "mailingList",
          email: data.email,
        },
      },
    ];

    let token =
      "sk3Lv9k9IpxALPfNZsiQyknYGmbjO5FLfnQIphoQ3rIseJPWf7nFb7ifbYPSeYB5nbCQmfTbEYILyNUVTUYYf06orBIqbFPmMZe3Rf3ge0dosqcprgTGW3oNeJ7ZcLrME5qJv3mLP6eNoKlKN8getlW0jcZBbqk2PNonh5eGM9vyM26Jo1Jo";
    let projectId = "14gp8bl9";
    await fetch(
      `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/production/`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => response.json())
      .then(() =>
        toast({
          title: "Subscribed succesfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      )
      .catch((error) => console.error(error));
  };
  return (
    <section className="bg-[#9ecbff]">
      {/* // <section className=""> */}
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Stay Connected With Me
            {/* Whereas recognition */}
          </h2>

          <p className=" text-gray-500 sm:mt-4 sm:block">
            Receive weekly devotionals, event invitations, and insightful
            articles delivered right to your inbox
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form
            action={""}
            className="sm:flex sm:gap-4"
            onSubmit={handleSubmit(submitData)}
          >
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                {...register("email")}
              />
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
              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-accent-color px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="font-semibold"> Subscribe </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180 group-hover:translate-x-1.5 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
