import React from "react";
const cards=[{
  image:"/img/image1.jpg",
  heading: "AURORA ",
  profile:"profile 1",
  views:"10 views",
  date:"1 month ago",
},
{
  image:"/img/tom_jerry.jpg",
  heading: "TOM AND JERRY",
  profile:"profile 2",
  views:"1000 views",
  date:"2 month ago",
},
{
  image:"/img/image3.jpg",
  heading: "TRAVEL",
  profile:"profile 3",
  views:"1cr views",
  date:"2 days ago",
},
{
  image:"/img/image4.jpg",
  heading: "DOLPHINS",
  profile:"profile 4",
  views:"200 views",
  date:"1 week ago",
},
{
  image:"/img/image5.jpg",
  heading: "ART AND CRAFT",
  profile:"profile 5",
  views:"1lakh views",
  date:"6 month ago",
},
{
  image:"/img/image6.jpg",
  heading: "WINTER SEASON",
  profile:"profile 6",
  views:"50 views",
  date:" 4 days ago",
},
{
  image:"/img/image7.jpg",
  heading: "FRIENDSHIP",
  profile:"profile 7",
  views:"10K views",
  date:"1 hour ago",
},
{
  image:"/img/cooking.jpeg",
  heading: "COOKING",
  profile:"profile 8",
  views:"20K views",
  date:"2 years ago",
},
{
  image:"/img/dance.jpg",
  heading: "DANCE",
  profile:"profile 9",
  views:"50K views",
  date:"5 years ago",
},
{
  image:"/img/pet.jpg",
  heading: "PETS",
  profile:"profile 10",
  views:"2 lakh views",
  date:"1 month ago",
},


];
  export default function Cardfunc(){
  const cardContent=cards.map(card=>
  <a href="/" className=" m-auto shadow-md shadow-slate-600 flex flex-col h-30 w-36 md:h-60 md:w-72 bg-slate-800 border-none rounded-xl mr-2 mb-4  mt-2 justify-around ">
    <img className=" h-20 w-36 md:h-36 md:w-72 object-cover" src={card.image}  alt=""/>
    <div className="px-2 font-sans underline">{card.heading}</div>
    <div className="px-2 font-sans flex flex-row ">
    <img className=" mt-1 rounded-full h-5 w-5 object-cover mr-1" src={card.image}  alt="on all website"/>
    {card.profile}
    </div>
    <div className=" flex flex-row ">
    <p className="px-2 font-sans">{card.views} .</p>
    <p className="px-2 font-sans">{card.date}</p>
  </div>
  </a>
  
  );
  return <div className="flex flex-row flex-wrap justify-left">{cardContent}</div>;
}