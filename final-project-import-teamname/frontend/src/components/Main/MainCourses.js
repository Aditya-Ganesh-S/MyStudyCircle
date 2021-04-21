import react from 'react';
import './MainCourses.scss';

import img1 from '../images/block_chain.jpg';
import img2 from '../images/machine_learning.jpg';
import img3 from '../images/mern.jpg';
import { Link } from 'react-router-dom';


class MainCourses extends react.Component {

    render() {

        return (
            <div class="project">
                <div class="flex">
                    <div class="image__overlay">
                        <img src={img1} alt="furnithure Cleaning" alt=""></img>
                        <div>
                            <p class="center">Block Chain</p>
                        </div>
                    </div>
                    <div class="image__overlay">
                        <img src={img2} alt="Floor Cleaning" alt="" />
                        <div>
                            <p class="center">Machine Learning</p>
                        </div>
                    </div>
                    <div class="image__overlay">
                        <img src={img3} alt="furnithure Cleaning" alt="" />
                        <div>
                            <p class="center">Web Development</p>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <Link>
                        <li class="btn-text">Enroll Now &rarr;</li>
                    </Link>

                </div>
            </div>
        )
    }
}

export default MainCourses;