import LoaderComponent from "@/common/components/LoaderComponent";
import NewsFeed from "@/modules/NewsFeed";
import GroupOfPost from "@/modules/NewsFeed/GroupOfPost";
import Profile from "@modules/Profile";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "@styles/Profile.module.css";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
  const router = useRouter();

  const { postId } = router.query;

  const formatterFunction = (data: any) => {
    return [data];
  };

  const urlString = "/photos/" + postId;
  if (!router.isReady) return <LoaderComponent />;

  return (
    <div className="heightFull">
      <GroupOfPost
        urlString={urlString}
        formatterFunction={formatterFunction}
      />
      {/* share button */}

      <div className="horizontalCenter">
        <button
          className={styles.pf241switchView}
          onClick={() => {
            window.open("https://wa.me/?text=" + window.location.href);
          }}>
          Share <i className="bi bi-whatsapp"></i>
        </button>
      </div>
    </div>
  );
};

export default Page;
