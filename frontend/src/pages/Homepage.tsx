import CourseCard from "../components/CourseCard.tsx";
import Search from "../components/Search.tsx";

const Homepage = () => {
    const courses = [
        {rating: 4.5, semester: "112-1", title: "Probability and Statistics", instructor: "Lebron James"},
        {rating: 4.5, semester: "112-1", title: "Probability and Statistics", instructor: "Lebron James"},
        {rating: 4.5, semester: "112-1", title: "Probability and Statistics", instructor: "Lebron James"},
    ]
    
    return (
        <>
            <div>
                <h1 className="font-bold text-center m-5 text-4xl">NTUEE Course Map</h1>
            </div>
            <Search/>
            <div>
                <div>
                    <h2 className="font-bold text-2xl mt-5">Popular</h2>
                    <div className="flex justify-center">
                        {courses.map((course) => (
                            <CourseCard
                                title={course.title}
                                instructor={course.instructor}
                                rating={course.rating}
                                semester={course.semester}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">About Course Map</h2>
                    <p className="max-w-[900px]">
                        The NTUEE Course Map is a comprehensive academic tool designed specifically for students in the
                        Electrical Engineering department at National Taiwan University of Electrical Engineering. This
                        resource meticulously outlines the curriculum, providing a clear pathway through the required
                        and
                        elective courses needed for graduation. The course map is designed to aid students in planning
                        their academic journey, ensuring a balanced progression of foundational theory and practical
                        application.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Homepage