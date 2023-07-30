import changeDateFormat from "@/common/methods/changeDateFormat";
import { PhotoData } from "@/common/types/PhotoData";
import styles from "@styles/SinglePost.module.css";
import Image from "next/image";
import Link from "next/link";

const SinglePost: React.FC<{ photoData?: PhotoData }> = ({ photoData }) => {
  return (
    <div className={styles.sp121postBody}>
      <Link href={`/profile/${photoData.user.username}`}>
      <img
        className={styles.sp122profilePic}
        src={photoData.user.profile_image.small}
        alt="User Profile"
        />
      </Link>

      <div className={styles.sp123postContent}>
        <div className={styles.sp124postHeader}>
          <span className={styles.sp125postHeaderName}>
            <b>{photoData.user.name}</b>
          </span>
          &nbsp;
          <span className={styles.sp126postHeaderUsername}>
            {photoData.user.username}
          </span>
          &nbsp; <span className={styles.sp127postHeaderDate}>&#183;</span>{" "}
          &nbsp;
          <span className={styles.sp128postHeaderDate}>
            {changeDateFormat(photoData.created_at)}
          </span>
          {/* <span className={styles.sp129postHeaderDots}>
            <i className="bi bi-three-dots"></i>
          </span> */}
        </div>

        <div className={styles.sp130postText}>
          <h6 className={styles.sp131postText}>{photoData.alt_description}</h6>

          <div className={styles.sp132postImage}>
            <img
              src={photoData.urls.small}
              alt={photoData.user.username}
              className={styles.sp133postImage}
            />

            <div className={styles.sp134postImageOverlay}>
              <span className={styles.sp136postImageOverlayIcon}>
                <i className="bi bi-heart"></i>
                <span className="sp137iconNumber">{photoData.likes}</span>
              </span>
              <span className={styles.sp136postImageOverlayIcon}>
                <i className="bi bi-eye"></i>
                <span className="sp137iconNumber">{photoData.views}</span>
              </span>
              <span className={styles.sp136postImageOverlayIcon}>
                <a href={photoData.links.download} download target="_blank">
                  {/* open full screen arrow icon on the right top */}
                  <i className="bi bi-box-arrow-up-right"></i>
                <span className="sp137iconNumber">{photoData.downloads}</span>
                </a>
              </span>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
