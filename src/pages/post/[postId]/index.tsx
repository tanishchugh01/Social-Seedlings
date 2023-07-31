import LoaderComponent from "@/common/components/LoaderComponent";
import NewsFeed from "@/modules/NewsFeed";
import GroupOfPost from "@/modules/NewsFeed/GroupOfPost";
import Profile from "@modules/Profile";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
  const router = useRouter();
  
  const { postId } = router.query ;

  const formatterFunction = (data:any)  => {
    return [data];
  }
  
  const urlString = "/photos/"+postId;
  if(!router.isReady) return <LoaderComponent />
  
  return (
    <div className="heightFull">
      <GroupOfPost urlString={urlString} formatterFunction={formatterFunction} />
    </div>
  );
};

export default Page;