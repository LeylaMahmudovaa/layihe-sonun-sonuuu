import React from 'react'

import DetailMain from './detailMain/detailMain'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Subscribe from '../mainPage/subscribe/subscribe'

import Style from './detailBlog.module.css'
import DetailArticle from './detailArticle/detailArticle'

function DetailBlog() {
    return (

        <>
            <section className={Style.container}>
                <DetailMain />
                <DetailArticle/>
            </section>

            <Subscribe />
        </>
    )
}

export default DetailBlog