import React from 'react'
import Header from '../../common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../common/Footer';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import ImageComponent from '../../common/ImageComponent';
import { MOBILE_ONE } from '../../../constants/DataConstants';
import 'react-whatsapp-widget/dist/index.css';

export default function Site() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppWidget CompanyIcon={ImageComponent} phoneNumber={`91${MOBILE_ONE}`} className='z-3' />
    </>
  );
}
