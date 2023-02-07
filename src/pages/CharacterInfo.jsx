import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const characterInfo = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.get(
        `https://naruto-api.fly.dev/api/v1/characters/${id}`
      );
      setCharacters(res.data);
    };

    getInfo();
  }, [id]);
  const { name, images, about, info } = characters;

  return (
    <div className="relative w-full flex flex-col justify-center h-screen">
      <h1 className="h-20 text-3xl">{name}</h1>
      {images && images.length > 0 && <img src={images[0]} alt={name}  className="relative h-full w-full"/>}
      <span className="absolute top-50">{about}</span>
      <p className="text-red-900 text-5xl">{characters.Peso}</p>
      {info && (
        <ul className="">
          {Object.entries(info).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default characterInfo;
