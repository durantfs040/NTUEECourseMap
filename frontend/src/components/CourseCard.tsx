const CourseCard = () => {
    return (
        <div>
            <div className="course-card rounded-lg">
                <img
                    className="m-auto rounded-t-lg"
                    alt="course"
                    height={150}
                    src="https://media.cnn.com/api/v1/images/stellar/prod/230523093708-01-lebron-james-052223.jpg?c=original"
                />
                <div className="bg-transparent m-2">
                    <div className="font-bold">
                        {`title instructor`}
                    </div>
                    <div>
                        rating
                    </div>
                    <div>
                        {`semester`}
                    </div>
                    <div>
                        ...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;