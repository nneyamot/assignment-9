// 'use client'

import AvailableTutors from "@/components/AvailableTutors";
import Banner from "@/components/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

export default async function Home() {

  return (
    <div className="container mx-auto ">
      <Banner></Banner>
      <div className=" mt-10 flex items-center justify-between">
        <h1 className=" text-3xl font-bold">Available Tutors</h1>

        <Link href={'/tutors'}>
          <Button className={'bg-white text-blue-600'}>View All Tutors <FaArrowRight />
          </Button>
        </Link>
      </div>
      <AvailableTutors></AvailableTutors>


      <WhyChooseUs></WhyChooseUs>
    </div>

  );
}
