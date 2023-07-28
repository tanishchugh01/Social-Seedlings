import React, { useEffect, useState } from "react";
import unsplashApi from "@services/apiConfig/unsplashApi";
import SinglePost from "@/common/components/SinglePost";
import { Photo } from "@common/types/Photo";
import { randomPhotoApi } from "../api/randomPhoto";

const GroupOfPost: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Make a GET request to the Unsplash API
    randomPhotoApi().then((res) => {
      setPhotos(res?.data);
    });
  }, []);

  return (
    <div>
      <h1>Unsplash Photos</h1>
      <ul>
        {photos.map((photo) => (
          <SinglePost photoData={photo} key={photo.id} />
        ))}
      </ul>
    </div>
  );
};

export default GroupOfPost;
