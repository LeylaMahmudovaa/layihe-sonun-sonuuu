import React, { useState } from 'react'

import Style from './detailArticle.module.css'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import vrEducation from '../../../assets/MainPage/ourArticle/image/14.png';
import vrArchitecture from '../../../assets/MainPage/ourArticle/image/1.png';
import vrEntertainment from '../../../assets/MainPage/ourArticle/image/5.png';
import vrEvent from '../../../assets/MainPage/ourArticle/image/4.png';

function DetailArticle() {


    const articles_ = [
        {
            img: vrEducation,
            name: 'VR Education',
            subText: 'The Future of Education: How VR is Revolutionizing the Classroom',
        },
        {
            img: vrArchitecture,
            name: 'VR Architecture',
            subText: 'Bringing Designs to Life: How VR is Changing Architecture',
        },
        {
            img: vrEntertainment,
            name: 'VR Entertainment',
            subText: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
        },
        {
            img: vrEvent,
            name: 'VR Event',
            subText: 'Exploring New Worlds: The Benefits of VR Travel',
        },
    ];

    const [articles, setArticles] = useState(articles_);

    return (
        <section className={Style.container}>
            <div className={Style.recentArticle}>
                <p>Recent Article</p>
                <Swiper
                 direction={'vertical'}
                 pagination={{ clickable: true }}
                 className={Style.boxs}
                 slidesPerView={3}
                 spaceBetween={30}
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index} className={Style.box}>
                            <div>
                                <img src={article.img} alt={article.name} />
                                <div className={Style.recentArticleText}>
                                    <h5>{article.name}</h5>
                                    <p>{article.subText}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>


            <div className={Style.popularHastag}>
                    <p>Popular Hashtag</p>

                    <div>
                        <h5>#VRDesign</h5>
                        <h5>#ArchitectureInnovation</h5>
                        <h5>#DesignThinking</h5>
                        <h5>#VirtualRealityArchitecture</h5>
                        <h5>#BringingDesignsToLife</h5>
                        <h5>#DesignVisualization</h5>
                        <h5>#ArchitecturalVisualization</h5>
                        <h5>#RevolutionizingArchitecture</h5>
                        <h5>#BuildingInVR</h5>
                    </div>
            </div>

        </section>
    )
}

export default DetailArticle