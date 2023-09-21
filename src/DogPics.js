import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message);
      });
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img src={image} alt="Dogs" key={image} />
      ))}
    </div>
  );
}

export default DogPics;
