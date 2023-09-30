import React from "react";
 import ReactDOM from 'react-dom';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import List from './tagfile.jsx'
const Search = () => {
  return (
  <>
    <div className="h-8 md:h-11 w-200px md:w-screen mb-2 flex flex-row border text-white border-white">
      <div className="flex flex-row box-content mr-auto h-8 "><img className=" md:h-11 w-16 md:w-28 " src="/img/youtube.jpg" alt=""/></div>
      <div className="flex h-8 md:h-11 ">
      <input className="border text-white border-r-0 rounded-r-none rounded-full p-3 bg-transparent  w-20 sm:w-auto md:w-80 h-8 md:h-11 mt-0 " type="text" placeholder="search " />
      <button className=" mr-1  fill-white bg-gray-800 border border-l-0  rounded-full rounded-l-none active:fill-slate-500 px-1 md:px-3 py-1 md:mr-3"><svg xmlns="http://www.w3.org/2000/svg " height="1.1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button></div>
      <button className="fill-white  bg-gray-800 border  border-none rounded-full px-2  active:fill-slate-500 mr-50 mr-auto"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg></button>
     {/* mic */}
     <button className="fill-white  bg-gray-800 border  border-none rounded-full p-2  active:fill-slate-500 mr-1 md:mr-5"><svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg></button> 
     <button className="bg-gray-800 flex flex-row mr-1">
      <div className="fill-white mt-0.5 p-1"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></div>
      <div className=" w-fit mt-2 mr-0 md:mr-5 text-sm md:text-lg">Sign up</div>
     </button>
     </div>
      </>
  )
};
export default Search;

