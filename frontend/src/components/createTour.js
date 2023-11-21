const apiURL = "http://localhost:4000/api/tours";

const createTour = async () => {
  const tourbody = {
    image: "asdasdasd",
    date: "1.1.20224",
    title: "oma tasdour",
    info: "Some iasdnfo",
    location: "Finasdland",
    duration: "asd5",
    cost: "10 000asd0",
  };

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tourbody),
  });
  const data = await response.json();
  console.log(data);
};

createTour();
