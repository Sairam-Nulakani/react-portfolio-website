import React from "react";
import "./testimonials.css";
import AVT from "../../assets/Client.png";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  const data = [
    {
      avatar: AVT,
      name: "someOne",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, eligendi lorem consectetur adipisicing elit. Consequuntur, eligendi lorem",
    },
    {
      avatar: AVT,
      name: "someOne",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, eligendi consectetur adipisicing elit. Consequuntur, eligendi lorem",
    },
    {
      avatar: AVT,
      name: "someOne",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, consectetur adipisicing elit. Consequuntur, eligendi lorem eligendi",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Revies from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
