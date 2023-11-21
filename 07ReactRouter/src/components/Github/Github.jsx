import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Imran-Ghafoor")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className=" text-center bg-gray-700 m-4 p-4 text-white text-3xl rounded-2xl ">
      {data.name} <br />
      {data.bio} <br />
      <div className="flex justify-center items-center pt-4">
        <img
          className=" rounded-xl"
          src={data.avatar_url}
          alt="Git picture"
          width={300}
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Imran-Ghafoor");
  return response.json();
};
