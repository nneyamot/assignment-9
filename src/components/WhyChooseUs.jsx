
const WhyChooseUs = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Why Choose */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-xl font-bold mb-6">Why Choose TutorsFind?</h2>

                        <div className="grid grid-cols-2 gap-4 text-center">

                            <div className="p-4 border rounded-xl">
                                <h3 className="font-semibold mt-2">Expert Tutors</h3>
                                <p className="text-sm text-gray-500">
                                    Learn from verified and experienced tutors
                                </p>
                            </div>

                            <div className="p-4 border rounded-xl">
                                <h3 className="font-semibold mt-2">Flexible Schedule</h3>
                                <p className="text-sm text-gray-500">
                                    Book sessions at your convenient time
                                </p>
                            </div>

                            <div className="p-4 border rounded-xl col-span-2">
                                <h3 className="font-semibold mt-2">Safe & Secure</h3>
                                <p className="text-sm text-gray-500">
                                    Your data is always protected with us
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* How it works */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-xl font-bold mb-6">How It Works</h2>

                        <div className="flex flex-col gap-6">

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold">Search Tutor</h3>
                                    <p className="text-sm text-gray-500">
                                        Find a tutor that matches your needs
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold">Book Session</h3>
                                    <p className="text-sm text-gray-500">
                                        Choose time & book your session
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold">Learn Online</h3>
                                    <p className="text-sm text-gray-500">
                                        Join and learn from the best
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;