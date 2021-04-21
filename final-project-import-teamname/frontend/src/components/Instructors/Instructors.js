import react from 'react';
import './Instructors.scss';

class Instructors extends react.Component {
    render() {
        return(
            <section class="instructors">
                {/* <i class= "image"><i> */}
                <div class ="row">
                    <div class="col-1-of-4">
                        <div class="box">
                            <i class= "box_image"></i>
                            <h3 class="box_heading">instructor name</h3>
                            <p class="box_text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="box">
                            <i class= "box_image"></i>
                            <h3 class="box_heading">instructor name</h3>
                            <p class="box_text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="box">
                            <i class= "box_image"></i>
                            <h3 class="box_heading">instructor name</h3>
                            <p class="box_text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="box">
                            <i class= "box_image"></i>
                            <h3 class="box_heading">instructor name</h3>
                            <p class="box_text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                </div>

            </section>   
        )
    }
}

export default Instructors;