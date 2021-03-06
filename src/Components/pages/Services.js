import React from "react";
import "./Services.css";
import Carousel from "react-elastic-carousel";

const Services = () => {
  const items = [
    {
      id: 1,
      title: "Web Development",
      src:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GG94vSlqhLVetIpwyDDPcAHaHa%26pid%3DApi&f=1",
    },
    {
      id: 2,
      title: "Android Application Development",
      src:
        "https://res.cloudinary.com/codecaamp/image/upload/v1612162150/Designers_-_Copy_-_Copy_-_Copy_armirx.png",
    },
    {
      id: 3,
      title: "Desktop Application Development",
      src:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cuTX8Z3MYKQ2PX701q_oZQHaEK%26pid%3DApi&f=1",
    },
    {
      id: 4,
      title: "Javascript Programing",
      src:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1AAaaV4A7tmDzY5l4VyvkgHaFj%26pid%3DApi&f=1",
    },
    {
      id: 5,
      title: "Python Programing",
      src:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.auYEzxeG1QSWa3sZbPJCvgHaHa%26pid%3DApi&f=1",
    },
  ];

  return (
    <div id="services">
      <div className="services">
        <div className="services__text">
          <h2>Services</h2>
        </div>
        <Carousel className="services__carousel">
          {items.map((item) => (
            <div key={item.id} className="services__carousel__inner__div">
              <h2>{item.title} </h2>
              <img src={item.src} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
