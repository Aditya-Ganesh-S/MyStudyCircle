import react from 'react';
import {Route, Switch} from 'react-router-dom'
import MyProfile from './MyProfile/MyProfile'
import Courses from './Courses/courses'
import CourseDetails from './CourseDetails/CourseDetails'
import Home from './Home/Home'
import Menu from './Navbar/menu'
import Signin from './LandingLoginComponent/LoginComponent';
import Signup from './Signup/Signup';
import PrivateRoute from './auth/PrivateRoute'
// import Nav from './Navbar2/navbar'

class Mainrouter extends react.Component{

    render(){

        return(

            <div>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <PrivateRoute exact path="/user/:userId" component={MyProfile} />
                    <Route path="/courses" exact component={Courses}></Route>
                    <PrivateRoute exact path="/courses/:courseId" component={CourseDetails} />
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/signup" component={Signup}></Route>


                </Switch>
            </div>
        )
    }
}

export default Mainrouter;