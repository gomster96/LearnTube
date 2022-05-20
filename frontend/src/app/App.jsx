import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";

//Custom Components
import YoutubeSearch from '../pages/youtube-search';
import MyCart from '../pages/youtube-search/cart';
import DashBoard from '../pages/dashboard';
import Main from '../pages/main';
import Home from '../pages/home';
import CourseOne from '../pages/course';
import CourseSingle from '../pages/course/course-single';
import CourseCategoryPage from '../pages/course-categories';
import Playlist from '../pages/playlist';
import MyPlaylist from '../pages/playlist/myPlaylist';
import Error from '../pages/404';
import LoadTop from '../components/Common/ScrollTop/LoadTop'
import CreateMyPlaylist from '../pages/playlist/createMyPlaylist';
import Login from "../pages/login";
import CourseContent from '../pages/course/course-single/CourseContent';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <LoadTop />
                <Switch>
                    <Route path="/learntube-studio/youtubeSearch" component={YoutubeSearch} />
                    <Route path="/learntube-studio/myCart" component={MyCart} />
                    <Route path="/learntube-studio" exact component={Playlist} />
                    <Route path="/learntube-studio/myPlaylist" exact component={MyPlaylist} />
                    <Route path="/learntube-studio/myPlaylist/create" exact component={CreateMyPlaylist} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/" exact component={Main} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/course" exact component={CourseOne} />
                    <Route path="/course/course-single" component={CourseSingle} />
                    <Route path="/course/course-single/content" component={CourseContent}></Route>
                    <Route path="/course-categories" component={CourseCategoryPage} />
                    <Route path="/event" component={Event} />
                    <Route component={Error} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
