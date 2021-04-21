import react, { useState } from 'react';
import './AddNewCourse.scss';

class AddCourse extends react.Component {

    render() {
        return (

            <section className="section-newCourse-container">
                <div className="section-newCourse-box">
                    <div className="section-newCourse-heading">
                        <h1 className="heading-secondary-newCourse">Your Courses</h1>
                        <button className="btn-text-addCourse">Add Course</button>
                    </div>
                    <br></br>
                    <div className="section-newCourse-editable">
                        <div className= "newCourseArea">
                            {/* {Render All Courses taught by the instructor over here} */}
                                Added courses
                        </div>
                    </div>
                    <br></br>
                </div>
            </section>

        )
    }
}

export default AddCourse;