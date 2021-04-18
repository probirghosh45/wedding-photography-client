import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from '../MyCheckoutForm/MyCheckoutForm';

const stripePromise = loadStripe('pk_test_51Ie77DDRt6EQW7DEC7U0f33HF5TeueaEbnppHT5OndACB6MbvqFJmwGEzjdw8XSn6F006AjLU62SDmunLmeunY5400m28ox1lT');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <MyCheckoutForm />
            {/* <CardElement
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
            /> */}
        </Elements>   
    );
};

export default ProcessPayment;