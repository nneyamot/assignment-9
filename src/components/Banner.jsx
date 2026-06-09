import Image from "next/image";

const Banner = () => {
    return (
        <div className="flex justify-around items-center">
            <div className="space-y-7 ">
                <h1 className="text-blue-600 border border-blue-600 w-1/3 text-center rounded-lg font-semibold">Trusted Platform</h1>
                <p className="text-5xl font-bold">Find Expert Tutors <br /> Books Sessions Easily</p>

                <p className="text-2xl  ">
                    MediaQueue helps your connect with expert tutors and <br /> book online learning sessions without any hassle.
                </p>

                <div className="flex gap-5">
                    <button className="bg-blue-600 text-white p-4 rounded-lg">Find Tutors</button>
                    <button className="border-2 border-blue-600  text-blue-600 rounded-lg p-4">Learn More</button>
                </div>

            </div>

            <div>
                <Image
                    src="/assets/hero.png"
                    alt='hero'
                    height={'350'}
                    width={'350'}

                ></Image>
            </div>

        </div>
    );
};

export default Banner;