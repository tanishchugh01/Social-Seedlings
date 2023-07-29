import { useEffect, useState } from "react";
import userDetailsApi from "./api/userDetailsApi";
import { UserData } from "@/common/types/userData";
import ErrorComponent from "@/common/components/ErrorComponent";
import LoaderComponent from "@/common/components/LoaderComponent";
import NewsFeed from "../NewsFeed";

const Profile: React.FC<{ userName: "string" }> = ({
  userName ,
}) => {
  const [userDetails, setUserDetails] = useState<UserData>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    userDetailsApi({ userName })
      .then((res) => {
        setIsLoaded(true);
        setUserDetails(res?.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, []);
  
  if (error) {
    return <ErrorComponent message={error.message} />;
  } else if (!isLoaded) {
    return <LoaderComponent />;
  }
  
  // unsplash profile
  return (
    <div>
      <div className="">{userDetails?.name}</div>
      {/* <div className="">{userName}</div> */}
      <div className="">{userDetails?.bio}</div>
      <div className="">{userDetails?.location}</div>
      <div className="">{userDetails?.total_likes}</div>
      <div className="">{userDetails?.total_photos}</div>
      <div className="">{userDetails?.total_collections}</div>
      <div className="">{userDetails?.instagram_username}</div>
      
      <NewsFeed urlString={`/users/${userName}/photos`} />
    </div>
  );
};

export default Profile;
