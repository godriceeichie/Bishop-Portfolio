// import React from "react";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { CTA } from ".";

// const NewsletterSubscribe = () => {
//   const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL!;
//   return (
//     <MailchimpSubscribe
//       url={MAILCHIMP_URL}
//       render={(props) => {
//         const { subscribe, status, message } = props || {};
//         return (
//           <CTA
//             status={status}
//             message={message}
//             onValidated={(formData: { EMAIL: string }) => subscribe(formData)}
//           />
//         );
//       }}
//     />
//   );
// };

// export default NewsletterSubscribe;
