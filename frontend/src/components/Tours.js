import Tour from "./Tour";
import Title from "./Title";
import React, { useState, useEffect } from "react";

function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiURL = "http://localhost:4000/api/tours";

  const handleDeleteItem = (itemId) => {
    console.log(toursData);
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  useEffect(() => {
    const getToursData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setToursData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getToursData();
  }, [apiURL]);

  

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} handleDelete={handleDeleteItem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
