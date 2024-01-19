"use client";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { Button, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import axios from "axios";

const CTA = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const toast = useToast();
  type SubscriptionEmail = {
    email: string;
  };
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

    setIsLoading(true);

    setError("");
    const email = data.email;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Newsletter API Error:", errorData);

        setError(
          errorData.error
        );
      } else {
        try {
          const responseData = await response.json();
          // console.log("Response Data:", responseData);

          if(responseData.status == 400){
            setError("Email is already subscribed")
          }

          else{
            toast({
              title: "Subscribed to mailing list",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        } catch (jsonError: any) {
          console.error("JSON Parsing Error:", jsonError);

          setError(
            jsonError.message
          );
        }
      }
    } catch (error: any) {
      console.error("Newsletter API Error:", error.message);
      setError(
        error.message
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="bg-[#9ecbff]">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Stay Connected With Me
          </h2>

          <p className=" text-gray-500 sm:mt-4 sm:block">
            Receive weekly devotionals, event invitations, and insightful
            articles delivered right to your inbox
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action={""} className="" onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-col gap-1">
              <div className="sm:flex-1 sm:flex sm:gap-4">
                {/* <label htmlFor="email" className="sr-only">
                Email
              </label> */}

                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                  {...register("email")}
                />
                {errors.email?.message && (
                <div className="text-red-500">{errors.email?.message}</div>
              )}
                {isLoading ? (
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
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
