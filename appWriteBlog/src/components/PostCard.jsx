import React from "react";
import appWriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureImage }) {
  <Link to={`/post/${$id}`}>
    <div className=" w-full bg-gray-100 rounded-xl p-4">
      <div className=" w-full justify-center mb-4">
        <img
          src={appWriteService.getFilePreview(featureImage)}
          alt={title}
          className=" rounded-xl"
        />
      </div>
      <h2 className=" text-xl font-bold">{title}</h2>
    </div>
  </Link>;
  return <div>PostCard</div>;
}

export default PostCard;
