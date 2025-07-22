import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { markprime } from '../Redux/actions/makeprime';
import { checkprime } from '../Redux/actions/checkprime';
import { getfilesystemurl } from '../Redux/actions/GetFilesystemURL';
import axios from 'axios';

export default function Payment() {


  const [amount, setAmount] = useState(290);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const store_data = useSelector((state) => state.Data);
  const [user, setuser] = useState(useSelector((state) => state.Data.UserData));

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("check emain=> ", user)
    dispatch(checkprime())
    if (store_data.UserData.isPrime && store_data.UserData.fils_system_url) {
      navigate("/Filesystem");
    }
  }, [store_data, user])
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const handlePayment = async () => {
    setLoading(true);
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    try {

      const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + '/create_order', {
        amount: parseFloat(amount),
        currency: 'INR',
      });

      if (!data.success) {
        alert('Failed to create order: ' + data.message);
        setLoading(false);
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'Skybox',
        description: 'Test Transaction',
        order_id: data.orderId,
        handler: async (response) => {
          try {
            // Verify payment with backend
            console.log("while the sending => ", user.id)
            const verifyResponse = await axios.post(process.env.REACT_APP_BACKEND_URL + '/verify_payment', {
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              user_email: user.email
            });

            if (verifyResponse.data.success) {
              // alert('Payment verified successfully!');
              dispatch(getfilesystemurl());
              dispatch(markprime());
              navigate('/Filesystem');
            } else {
              alert('Payment verification failed: ' + verifyResponse.data.message);
              dispatch({
                type: 'SET_ERROR',
                payload: {
                  msg: "Payment verification failed " + verifyResponse.data.message,
                  show: true
                }
              })
            }
          } catch (error) {
            alert('Error verifying payment: ' + error.message);
          }
          setLoading(false);
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: '#000000',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert('Error creating order: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-indigo-900">
      <div className="w-80 bg-gradient-to-r from-black to-indigo-900 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        {/* Plan Name */}
        <h2 className="text-2xl font-bold text-white text-center">Pro Plan</h2>
        <p className="text-sm text-white text-center mt-1">Perfect for growing businesses</p>

        {/* Price */}
        <div className="mt-4 text-center">
          <span className="text-4xl font-bold text-white">$9</span>

        </div>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white">Unlimited Projects</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white">24/7 Support</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white">Advanced Analytics</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white">Team Collaboration</span>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="mt-6">
          <button onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  )
}
