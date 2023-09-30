// import { useState } from "react";
const tags=["All","Music","Live","Bollywood Music","Dramedy","Action Thriller","Tamil Cinema","News","Cricket","Gaming","Game Shows","Bhajan","Astronomy","Cooking Shows","Recently Uplodaded"];
export default function List(){
const listItems=tags.map(tag=>
  <div className=" bg-slate-800 w-full shadow-md shadow-slate-600 pl-1  border-none rounded-xl cursor-pointer  ">
  <li >{tag}</li>
  </div>);
  return <p className="flex flex-row text-ellipsis overflow-auto ..."><ul className="  flex flex-row gap-2">{listItems}</ul></p>;
}