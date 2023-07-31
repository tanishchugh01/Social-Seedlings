import React, { useEffect, useMemo, useState } from "react";
import SinglePost from "@/common/components/SinglePost";
import { PhotoData } from "@/common/types/PhotoData";
import { randomPhotoApi } from "../api/randomPhoto";
import styles from "@styles/GroupOfPost.module.css";
import ErrorComponent from "@/common/components/ErrorComponent";
import Loader from "@/common/components/LoaderComponent";
import GridImages from "@/modules/Profile/GridImages";

const GroupOfPost: React.FC<{
  page: number;
  urlString: string;
  isScroll: Boolean;
}> = ({ page = 1, urlString = "/photos", isScroll = true }) => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useMemo(() => {
    randomPhotoApi({ page, urlString })
      .then((res) => {
        setIsLoaded(true);
        setPhotos(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page, urlString]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  } else if (!isLoaded) {
    return <Loader />;
  }

  if (!isScroll) {
    return <GridImages photodata={photos} />;
  }

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
