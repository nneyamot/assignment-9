import { Button } from "@heroui/react";
import Image from "next/image";

const AvailableTutors = async () => {
    const res = await fetch('http://localhost:5000/tutors');
    const tutors = await res.json();



    return (
        <div className="grid grid-cols-4 gap-4 mt-10 border p-5 rounded">
            {

                tutors.map(tutor => <div key={tutor._id} className="space-y-2 p-7 border rounded-lg text-xl font-bold">
                    <div className="flex items-center justify-center w-full object-cover"
                    >
                        <Image src='/assets/teacher.png'
                            alt='teacher logo'
                            width={'200'}
                            height={'200'}
                        />
                    </div>

                    <h1>{tutor.name}</h1>
                    <p>{tutor.subject}</p>
                    <p>{tutor.location}</p>
                    <Button className={'rounded-lg'}>Book Session</Button>

                </div>)
            }


        </div>
    );
};

export default AvailableTutors;