import express from 'express';
import userController from '../controllers/userController';
import courseController from './../controllers/courseController'
import authCtrl from './../controllers/auth'
const router = express.Router();


router.route('/')
.get(  courseController.getAllCourses)
.post(authCtrl.requireSignin, courseController.addCourse)

router.route('/:courseId')
.get(authCtrl.requireSignin, courseController.getOneCourse)
.put(authCtrl.requireSignin, courseController.updateCourse)
.delete(courseController.deleteCourse)

router.route('/:courseId/:lessonId')
.delete(courseController.deleteLesson);

router.param("userId", userController.userById)


export default router;
