import { CTA, Navbar } from "@/components";
import Footer from "@/components/Footer";

import React from "react";

const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <CTA />
      {/* <NewsletterSubscribe /> */}
      <Footer />
    </>
  );
};

export default Navigation;
