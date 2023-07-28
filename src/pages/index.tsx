import NewsFeed from "@modules/NewsFeed";
import { NextPage } from "next";

const Home :NextPage = () => {
  return (
    <div className="">
      <NewsFeed />
    </div>
  );
}

export default Home;