import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import toast from "react-hot-toast";
import * as S from "./payment-form.styles";
import VisaCard from "../../assets/visa.svg";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const createPaymentIntent = async () => {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      );

      const jsonResponse = await response.json();
      const {
        paymentIntent: { client_secret },
      } = jsonResponse;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "guest",
          },
        },
      });

      if (paymentResult.error) {
        throw new Error(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          return "Payment Successful";
        }
      }
    };

    toast.promise(
      createPaymentIntent(),
      {
        loading: "Processing payment...",
        success: (data) => {
          setIsProcessingPayment(false);
          return data;
        },
        error: (err) => {
          setIsProcessingPayment(false);
          return err.message;
        },
      },
      {
        style: {
          padding: "10px",
          width: "100%",
          fontSize: "1.2rem",
          fontWeight: "600",
          fontFamily: "Poppins",
        },
      }
    );
  };
  return (
    <S.PaymentFormContainer>
      <img src={VisaCard} alt="visa card" />
      <span>Test Card info:</span>
      <span>Nr: 4242 4242 4242 4242 MM/ÅÅ 04/424 CVC:42424 </span>
      <S.FormContainer onSubmit={paymentHandler}>
        <h2>Credit card Payment:</h2>
        <CardElement />
        <S.PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </S.PaymentButton>
      </S.FormContainer>
    </S.PaymentFormContainer>
  );
};

export default PaymentForm;
