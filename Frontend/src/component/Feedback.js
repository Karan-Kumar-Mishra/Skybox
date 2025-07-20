import React, { useRef } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { feedback } from "../Redux/actions/Feedback";
export default function Feedback() {
  const dispatch=useDispatch();
  const store_data = useSelector((state)=>state.Data);
  const FeedbackTextRef=useRef(null);
  function SendFeedback()
  {
   dispatch(feedback(FeedbackTextRef.current.value))
   FeedbackTextRef.current.value="";
  }
  function addEmoji(emoji)
  {
    FeedbackTextRef.current.value=FeedbackTextRef.current.value+emoji;
  }
  return (
    <>
    <Navbar/>
    <div className="h-screen z-50 flex items-center justify-center bg-gradient-to-r from-black to-indigo-900">
      <div className="bg-slate-800 border border-slate-700 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
        <h1 className="text-center text-slate-600 text-xl font-bold col-span-6">
          Send Feedback
        </h1>
        <textarea
          ref={FeedbackTextRef}
          className="bg-slate-700 text-slate-300 h-60 w-[40rem] placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
          placeholder="Your feedback..."
        ></textarea>
        <button 
        onClick={()=>{
          addEmoji('😀');
        }}
        className="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
          <svg
            viewBox="0 0 512 512"
            height="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>
        <button className="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
          <svg
          onClick={()=>{
            addEmoji('🙁');
          }}
            viewBox="0 0 512 512"
            height="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>
        <span className="col-span-2"></span>
        <button onClick={SendFeedback}
         className="col-span-2 stroke-slate-300 bg-slate-700 focus:stroke-blue-200 focus:bg-blue-600 border border-slate-600 hover:border-slate-300 rounded-lg p-2 duration-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
             
              d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10.11 13.6501L13.69 10.0601"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
              </>
  );
}
