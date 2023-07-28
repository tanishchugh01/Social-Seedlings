import React, { useEffect, useState } from "react";
import SinglePost from "@/common/components/SinglePost";
import { PhotoData } from "@/common/types/PhotoData";
import { randomPhotoApi } from "../api/randomPhoto";
import styles from "@styles/GroupOfPost.module.css";

const GroupOfPost: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);

  useEffect(() => {
    // Make a GET request to the Unsplash API
    randomPhotoApi().then((res) => {
      setPhotos(res?.data);
    });
  }, []);

  return (
    <div>
      <div className={styles.gop234root}>
        <div className={styles.gop235feed}>
          {photos.map((photo) => (
            <SinglePost photoData={photo} key={photo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupOfPost;
