"use client";
import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../../public/slider/slideShow1.jpg";
import Image2 from "../../public/slider/slideShow2.jpg";
import Image3 from "../../public/slider/slideShow3.jpg";
import Image4 from "../../public/slider/slideShow4.jpg";
import Image5 from "../../public/slider/slideShow5.jpg";
import Image6 from "../../public/slider/slideShow6.jpg";
import Image7 from "../../public/slider/slideShow7.jpg";
import Image8 from "../../public/slider/slideShow8.jpg";
import Image from "next/image";

export default class ImagesCaurosel extends Component {
  render(): ReactNode {
    const data = [
      {
        img: Image1,
        title: "Student Learning Web 3",
      },
      {
        img: Image2,
        title: "Meeting With President.",
      },
      {
        img: Image3,
        title: "President Launching Piaic website.",
      },
      {
        img: Image4,
        title: "Student Learning Web 3",
      },
      {
        img: Image5,
        title: "Student Learning Web 3",
      },
      {
        img: Image6,
        title: "Student Learning Web 3",
      },
      {
        img: Image7,
        title: "Student Learning Web 3",
      },
      {
        img: Image8,
        title: "Student Learning Web 3",
      },
    ];

    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator ",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],

      custompaging: (i: number) => (
        <div className="mt-2 text-xs opacity-0">{i}</div>
      ),
    };
    return (
      <div className="mt-10 w-full">
        <Slider {...settings} className="w-full">
          {data.map((val, index) => {
            return (
              <div
                className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none"
                key={index}
              >
                <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                  <Image
                    src={val.img}
                    className="w-full h-[300px] md:h-[600px] object-cover"
                    alt={val.title}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
