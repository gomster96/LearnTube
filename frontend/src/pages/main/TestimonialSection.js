import React from 'react';
import Slider from "react-slick";
import Tilty from 'react-tilty';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial4 from '../../components/Testimonial/SingleTestimonial4';


import animBall from '../../assets/img/shape/circle-shape.png';
import author1 from '../../assets/img/testimonial/style4/1.png';
import author2 from '../../assets/img/testimonial/style4/2.png';
import author3 from '../../assets/img/testimonial/style4/3.png';
import author4 from '../../assets/img/testimonial/style4/4.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <div className="rs-testimonial style4 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container relative">
                    <div className="left-top-shape">
                        <Tilty perspective="800" reverse={true}>
                            <img
                                className="rotateme"
                                src={animBall}
                                alt=""
                            />
                        </Tilty>
                    </div>
                    <SectionTitle
                        sectionClass="sec-title mb-60 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="LearnTube 사용 후기"
                        titleClass="title mb-0"
                        title="Reviews After Using LearnTube"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={"https://github.com/zihooy.png"}
                            name="양지후"
                            description="LearnTube를 통해 취업준비를 하고 있어요. 지방에서 취준을 하느라 주로 유튜브 영상을 통해 코딩 테스트 준비를 하는 중인데, LearnTube에서 코테 강의실을 만들어 YouTube 영상에서 제가 도움 받았던 걸 올려놓으니 많은 분들이 수강하고 계시더라고요. 함께 좋은 영상으로 공부할 수 있어서 행복해요:) "
                            designation="Student"
                        />
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={"https://i.ibb.co/1n2FvdH/Kakao-Talk-Photo-2022-06-02-04-46-38-1.png"}
                            name="안병웅"
                            description="저는 외국에 있어서 한국 수업 커리큘럼을 잘 몰라요. 학교를 다니기 힘든 환경인데 LearnTube의 여러 사용자들이 고등수학 커리큘럼대로 강의실을 만들어주셔서 무리없이 검정고시를 준비하고 있답니다. 앞으로 더 많은 과목과 강의가 열렸으면 좋겠어요. 어쨌든 LearnTube 아주 잘 사용하고 있습니다! "
                            designation="Student"
                        />
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={"https://github.com/skLee-HGU.png"}
                            name="이선경"
                            description="수학을 전공중인 대학생인데 학교 강의 외에도 더 많은 자료를 찾아보고 싶었어요. 복습하거나 과제를 할 때 이해되지 않는 부분이 많았거든요. 유료 사이트를 가입할 만큼의 시간은 없고, 간단하게 유튜브 영상으로 학습하고 싶었는데 이 LearnTube가 딱 저를 위한 서비스 같네요! 좋은 서비스 제공해주셔서 감사해요~"
                            designation="Student"
                        />
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={author4}
                            name="Astone Martine"
                            description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,"
                            designation="Visitor"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial