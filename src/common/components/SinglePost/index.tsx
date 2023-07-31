import changeDateFormat from "@/common/methods/changeDateFormat";
import { PhotoData } from "@/common/types/PhotoData";
import styles from "@styles/SinglePost.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blurhash } from "react-blurhash";

const SinglePost: React.FC<{ photoData?: PhotoData }> = ({ photoData }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState<boolean>(false);
  return (
    <div className={styles.sp121postBody}>
      <Link href={`/profile/${photoData.user.username}`}>
        <div className={styles.sp289dpPar}>
          <Image
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className={styles.sp122profilePic}
            src={photoData.user.profile_image.small}
            alt="User Profile"
          />
        </div>
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
            <div className={styles.sp829imagePar}>
              <Image
                src={photoData.urls.small}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                onLoadingComplete={() => setIsImageLoaded(true)}
                alt={photoData.user.username}
                className={styles.sp133postImage}
                style={{
                  opacity: isImageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  zIndex: isImageLoaded ? 1 : -1,
                }}
              />
              <Blurhash
                hash={photoData.blur_hash}
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
            </div>

            <div className={styles.sp134postImageOverlay}>
              <span className={styles.sp136postImageOverlayIcon}>
                <i className="bi bi-heart"></i>
                <span className="sp137iconNumber">{photoData.likes}</span>
              </span>
              <Link href={`/post/${photoData.id}`}>
                <span className={styles.sp136postImageOverlayIcon}>
                  <i className="bi bi-upload"></i>
                  {/* <span className="sp137iconNumber">{photoData.views}</span> */}
                </span>
              </Link>
              <span className={styles.sp136postImageOverlayIcon}>
                <a href={photoData.links.download} download target="_blank" title="Full Screen" rel="noreferrer">
                  {/* open full screen arrow icon on the right top */}
                  <i className="bi bi-box-arrow-up-right"></i>
                  {/* <span className="sp137iconNumber">{photoData.downloads}</span> */}
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
