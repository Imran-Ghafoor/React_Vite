import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Imran-Ghafoor")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className=" text-center bg-gray-600 m-8 p-4 text-white text-3xl ">
       {data.name} <br />
       {data.bio} <br />
      
      <div className="flex justify-center items-center pt-3 m-1 pb-1">
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;
