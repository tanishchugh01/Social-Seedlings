import { PhotoData } from "@/common/types/PhotoData";
import styles from "@styles/SingleGridPost.module.css";

const SingleGridPost: React.FC<{photo:PhotoData}> = ({ photo }) => {
  return (
    // <div className={styles.gop236gridImage}>
      <img
        src={photo.urls.small}
        alt={photo.user.username}
        className={styles.gop237gridImage}
      />
    // </div>
  );
};

export default SingleGridPost;