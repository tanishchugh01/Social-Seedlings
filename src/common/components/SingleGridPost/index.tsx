import { PhotoData } from "@/common/types/PhotoData";
import styles from "@styles/SingleGridPost.module.css";
import Image from "next/image";

const SingleGridPost: React.FC<{ photo: PhotoData }> = ({ photo }) => {
  return (
    // <div className={styles.gop236gridImage}>
    <img
    // layout="fill"
    // objectFit="contain"
      src={photo.urls.small}
      alt={photo.user.username}
      className={styles.gop237gridImage}
    />
    // </div>
  );
};

export default SingleGridPost;
