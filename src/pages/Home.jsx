import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [saints, setSaints] = useState([]);

  useEffect(() => {
    const getSaints = async () => {
      const res = await axios.get(
        "https://naruto-api.fly.dev/api/v1/characters"
      );
      setSaints(res.data);
    };

    getSaints();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-auto h-auto">
        {saints.map((naruto) => (
          <Link to={`/info/${naruto.id}`} key={naruto.id}>
            <div className="relative flex justify-center">
              <h2 className="absolute text-2xl top-2 font-bold text-white shadow-zinc-900 capitalize indent-1">
                {naruto.name}
              </h2>
              <img
                src={naruto.images[1] || naruto.images[0]}
                alt={naruto.id}
                className="object-cover w-72 h-72"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
