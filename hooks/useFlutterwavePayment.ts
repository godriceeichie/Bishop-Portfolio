import { useState } from 'react';

const useFlutterwavePayment = () => {
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState(null);

  const initiatePayment = async () => {
    try {
      const response = await fetch("https://api.flutterwave.com/v3/payments", {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLUTTERWAVE_API_KEY!}`
        },
        body: JSON.stringify({
          tx_ref: Date.now(),
          amount: "100",
          currency: "NGN",
          redirect_url: "https://bishopisijola.org",
          meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a"
          },
          customer: {
            email: "user@gmail.com",
            phonenumber: "08045289183",
            name: "Yemi Desola"
          },
          customizations: {
            title: "Pied Piper Payments",
            logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    }
  };

  return {
    initiatePayment,
    error,
    data
  };
};

export default useFlutterwavePayment;
