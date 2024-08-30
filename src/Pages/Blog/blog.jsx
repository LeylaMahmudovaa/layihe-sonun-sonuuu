import React from 'react'

import Navigation from './navigation/navgitaion'
import BlogContent from './blogContent/blogContent'
import Subscribe from '../mainPage/subscribe/subscribe'



function Blog() {
    return (
        <>
            <Navigation />
            <BlogContent />
            <Subscribe/>
        </>
    )
}

export default Blog