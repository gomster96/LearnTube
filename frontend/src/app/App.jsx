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
                    <Route path="/learntube/learntube-studio/youtubeSearch" component={YoutubeSearch} />
                    <Route path="/learntube/learntube-studio/myCart" component={MyCart} />
                    <Route path="/learntube/learntube-studio" exact component={Playlist} />
                    <Route path="/learntube/learntube-studio/myPlaylist" exact component={MyPlaylist} />
                    <Route path="/learntube/learntube-studio/myPlaylist/create" exact component={CreateMyPlaylist} />
                    <Route path="/learntube/dashboard" component={DashBoard} />
                    <Route path="/learntube" exact component={Main} />
                    <Route path="/learntube/home" component={Home} />
                    <Route path="/learntube/login" component={Login} />
                    <Route path="/learntube/course" exact component={CourseOne} />
                    <Route path="/learntube/course/course-single" component={CourseSingle} />
                    <Route path="/learntube/content" component={CourseContent} />
                    <Route path="/learntube/course-categories" component={CourseCategoryPage} />
                    <Route path="/learntube/event" component={Event} />
                    <Route component={Error} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
