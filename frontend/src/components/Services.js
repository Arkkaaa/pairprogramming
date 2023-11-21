// import { services } from "../data";
import Service from "./Service";
import Title from "./Title";
import React, { useState, useEffect } from "react";

function Services() {
  const apiURL = "http://localhost:4000/api/services";
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getServicesData();
  }, [apiURL]);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {console.log(servicesData)}
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
