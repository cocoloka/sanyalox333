const cars = [
    { name: "Car 1", color: "white", type: "suv", steering: "right", img: "images/white-suv.jpg" },
    { name: "Car 2", color: "black", type: "non-suv", steering: "left", img: "images/black-sedan.jpg" },
    { name: "Car 3", color: "red", type: "suv", steering: "right", img: "images/red-suv.jpg" },
    { name: "Car 4", color: "white", type: "non-suv", steering: "left", img: "images/white-sedan.jpg" },
    { name: "Car 5", color: "black", type: "suv", steering: "left", img: "images/black-suv.jpg" },
  ];
  
  const filterButton = document.getElementById("filter-button");
  const carList = document.getElementById("car-list");
  
  filterButton.addEventListener("click", () => {
    const color = document.getElementById("color").value;
    const type = document.getElementById("type").value;
    const steering = document.getElementById("steering").value;
  
    const filteredCars = cars.filter(car => {
      return (
        (color === "all" || car.color === color) &&
        (type === "all" || car.type === type) &&
        (steering === "all" || car.steering === steering)
      );
    });
  
    displayCars(filteredCars);
  });
  
  function displayCars(carArray) {
    carList.innerHTML = "";
    if (carArray.length === 0) {
      carList.innerHTML = "<p>No cars found.</p>";
      return;
    }
    carArray.forEach(car => {
      const carDiv = document.createElement("div");
      carDiv.classList.add("car");
      carDiv.innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <p>${car.name}</p>
        <p>Color: ${car.color}</p>
        <p>Type: ${car.type}</p>
        <p>Steering: ${car.steering}</p>
      `;
      carList.appendChild(carDiv);
    });
  }
  
  // Display all cars initially
  displayCars(cars);
  