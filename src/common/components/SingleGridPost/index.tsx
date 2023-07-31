import React from "react";
import { PhotoData } from "@/common/types/PhotoData";
import styles from "@styles/SingleGridPost.module.css";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

const SingleGridPost: React.FC<{ photo: PhotoData }> = ({ photo }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState<boolean>(false);
  return (
    <div className={styles.gop236gridImage}>
      <Image
        layout="fill"
        objectFit="cover"
        loading="lazy"
        onLoadingComplete={() => setIsImageLoaded(true)}
        src={photo.urls.small}
        alt={photo.user.username}
        style={{
          opacity: isImageLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: isImageLoaded ? 1 : -1,
        }}
        className={styles.gop237gridImage}
      />
      {
        <Blurhash
          hash={photo.blur_hash}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            opacity: isImageLoaded ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      }
    </div>
  );
};

export default SingleGridPost;
