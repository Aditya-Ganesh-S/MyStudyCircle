import react from 'react';
import './Main.scss';
import MainCourses from './MainCourses';

class Main extends react.Component {

    render() {

        return (
            <main>
                <section class="section-about">
                    <div class="align-center">
                        <h2 class="heading-secondary">
                            Most Popluar Technologies
                        </h2>
                    </div>
                    <div class="most-pop-course flex-col">
                        <div class="textComponent flex-col">
                            <h3 class="heading-tertiary">Learn most popular courses with us!!</h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusamus nisi dolorem non hic
                                officiis placeat repudiandae incidunt, nam, commodi doloremque consequatur. Quisquam,
                                repudiandae! Error odit voluptate provident dolores cumque!
                            </p>
                        </div>
                    </div>
                    <MainCourses />
                </section>
            </main>
        )
    }
}

export default Main