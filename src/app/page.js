// 'use client'

import AvailableTutors from "@/components/AvailableTutors";
import Banner from "@/components/Banner";
import { toast } from "react-toastify";

export default async function  Home() {
  
      const res = await fetch('http://localhost:5000/tutors');
      const tutors = await res.json();
      console.log(tutors);

  return (
    <div className="container mx-auto ">
      <Banner></Banner>
      <AvailableTutors></AvailableTutors>
    </div>

  );
}
