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
  const { name, images, about, info, page } = characters;

  return (
    <div className="h-auto w-full flex flex-col justify-center my-10">
      <h1 className="text-3xl text-center my-4">{name}</h1>
      <div className="flex justify-center">
        {images && images.length > 0 && (
          <img
            src={images[0]}
            alt={name}
            className="object-fill rounded-full w-[300px] h-[300px]"
          />
        )}
      </div>
      <div className="flex flex-col w-full justify-center px-10 my-2">
        <div className="md:px-4 px-1">
          <span className="sm:text-justify text-center">{about}</span>
        </div>
        <div className="flex">
          {info && (
            <ul className="px-4 h-full flex flex-wrap">
              {Object.entries(info).map(([key, value]) => (
                <li key={key} className="flex my-4 p-4">
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <a href={page} target="_blank">
          <button className="flex justify-center w-auto h-auto p-2 border-red-900 border">
            Leer mas
          </button>
        </a>
      </div>
    </div>
  );
};

export default characterInfo;
