import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistBoard from '../../components/Courses/PlaylistBoard';
import SearchWidget from '../../components/Widget/SearchWidget';
import CourseDashBoard from '../../components/Courses/CourseDashBoard';

// Course courseImg
import courseImg1 from '../../assets/img/courses/1.jpg';
import courseImg2 from '../../assets/img/courses/2.jpg';
import courseImg3 from '../../assets/img/courses/3.jpg';

const PlaylistWidget = () => {
    return (
        <div className="mb-50">
            <div class="row">
                <h3 className="col text-start p-5">나의 Playlist</h3>
                <div className=" col search-wrap searchbtn">
                    <input type="search" placeholder="Searching..." name="s" className="search-input" val="" />
                    <button type="submit" value="Search"><i className="fa fa-search"></i></button>
                </div>
                <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                    <div className="container">
                        <div className="course-part clearfix m-0">
                            <PlaylistBoard
                                playlistTitle="OS를 공부하기 전에 알아두면 좋은 개념"
                                playlistImg={courseImg1}
                                playlistTime="01:34"
                                playlistVideo={6}
                                openDate="2022.03"
                                creatorName="양지후"
                            />
                            <PlaylistBoard
                                playlistTitle="DFS 기초"
                                playlistImg={courseImg2}
                                playlistTime="40:12"
                                playlistVideo={8}
                                openDate="2022.03"
                                creatorName="양지후"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                <div className="container">
                    <div className="row">
                        <div className="pr-50 md-pr-14">
                            <div className="course-part clearfix m-0">
                                <CourseDashBoard
                                    courseClass="courses-item"
                                    courseImg={courseImg1}
                                    courseTitle="영리한 프로그래밍을 위한 알고리즘 강좌"
                                    notice="특강"
                                    progress={60}
                                    openDate="2022.03"
                                    creatorName="양지후"
                                />
                                <CourseDashBoard
                                    courseClass="courses-item right"
                                    courseImg={courseImg2}
                                    courseTitle="그림으로 쉽게 배우는 운영체제"
                                    notice="공지"
                                    progress={80}
                                    openDate="2022.02"
                                    creatorName="이지슬"
                                />
                                <CourseDashBoard
                                    courseClass="courses-item"
                                    courseImg={courseImg3}
                                    courseTitle="프로그래밍 시작하기 : 파이썬 입문"
                                    notice="공지"
                                    progress={60}
                                    openDate="2022.01"
                                    creatorName="양지후"
                                />
                            </div>
                            <div className="pagination-area orange-color text-center mt-30 md-mt-0">
                                <ul className="pagination-part">
                                    <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">Next <i className="fa fa-long-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default PlaylistWidget;