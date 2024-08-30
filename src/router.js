import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/mainPage/mainPage';
import About from './Pages/About/about';
import Service from './Pages/service/service';
import DetailService from './Pages/Detail/detail';
import PricingPlan from './Pages/pricingPlan/pricingPlan';
import Blog from './Pages/Blog/blog';
import OurTeam from './Pages/ourTeam/ourTeam';
import ContactUS from './Pages/contactUS/contactUS';
import TeamsConditions from './Pages/teamsConditions/teamsConditions';
import Privacy from './Pages/Pricacy/privacy';
import NotFound from './Pages/notFound/notFound';
import DetailBlog from './Pages/detailBlog/detailBlog';
import Faq from './Pages/pageFaq/pageFaq'

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Service />} />
    <Route path="/detail-service" element={<DetailService />} />
    <Route path="/pricing-plan" element={<PricingPlan />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog-detail" element={<DetailBlog />} />
    <Route path="/ourTeam" element={<OurTeam />} />
    <Route path="/contact" element={<ContactUS />} />
    <Route path="/teams-conditions" element={<TeamsConditions />} />
    <Route path="/privacypolicy" element={<Privacy />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="*" element={<NotFound />} /> 
  </Routes>
);

export default RouterConfig;
