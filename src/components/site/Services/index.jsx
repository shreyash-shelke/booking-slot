import React, { useState } from 'react';
import { BreadCrumb } from '../../common/BreadCrumb';
import ServiceCards from '../ServiceCards';
import ServicesModal from '../ServicesModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    { stitle: 'Snooker Table', imgPath: '/assets/img/services/snooker-table.png', descr: ' playing snooker on a professional-grade table.' },
    { stitle: 'Table Tennis', imgPath: '/assets/img/services/table-tennis.png', descr: 'Fast-paced table tennis for all skill levels.' },
    { stitle: 'CCTV Surveillance', imgPath: '/assets/img/services/cctv.png', descr: '24/7 CCTV monitoring for security.' },
    { stitle: 'Drinking Water', imgPath: '/assets/img/services/drinking-water.png', descr: 'Free purified drinking water available.' },
    { stitle: 'Changing Room', imgPath: '/assets/img/services/changing-room.png', descr: 'Clean and comfortable changing rooms.' },
    { stitle: 'Waiting Area', imgPath: '/assets/img/services/waiting-area.png', descr: 'Relax in our comfortable waiting area.' },
    { stitle: 'Car & Bike Parking', imgPath: '/assets/img/services/parking.png', descr: 'Secure parking for cars and bikes.' },
    { stitle: 'Washrooms', imgPath: '/assets/img/services/washroom.png', descr: 'Hygienic and well-maintained washrooms.' },
  ];

  return (
    <div>
      <BreadCrumb name="Services & Facilities" />
      <div className="latest-blog grid sec-mar py-5 mt-0">
        <div className="container">
          <ServiceCards sData={servicesData} setSelectedService={setSelectedService} />
        </div>
      </div>
      <ServicesModal service={selectedService} />
    </div>
  );
}
