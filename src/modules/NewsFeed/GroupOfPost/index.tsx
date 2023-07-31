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
  setIsError: Function
}> = ({ page = 1, urlString = "/photos", isScroll = true, setIsError }) => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    randomPhotoApi({ page, urlString })
      .then((res) => {
        setIsLoaded(true);
        setPhotos(res);
      })
      .catch((err) => {
        setError(err);
        setIsError(true);
      });
  }, [page, urlString]);

  if (error) {
    return <ErrorComponent error={error} />;
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
