
const AvailableTutors = async () => {
    const res = await fetch('http://localhost:5000/tutors');
    const tutors = await res.json();

    console.log(tutors);


    return (
        <div>

        </div>
    );
};

export default AvailableTutors;