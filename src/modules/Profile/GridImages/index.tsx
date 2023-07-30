import SingleGridPost from "@/common/components/SingleGridPost";
import { PhotoData } from "@/common/types/PhotoData";
import styles from "@styles/GridImages.module.css";

const GridImages: React.FC<{photodata:PhotoData[]}> = ({ photodata }) => {
  return (
    // <div className={styles.gop234root}>
      <div className={styles.gop235feed}>
        {photodata?.map((photo) => (
          <SingleGridPost photo={photo} key={photo.id} />
        ))}
      </div>
    // </div>
    );
}

export default GridImages;