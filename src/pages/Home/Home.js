import React from 'react';
import Banner from '../Home/Banner';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import OurBrand from './OurBrand';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OurBrand></OurBrand>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;