import Profile from "@modules/Profile";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();

  const { username } = router.query ;

  return (
    <div className="">
      <Profile userName={username} />
    </div>
  );
};

export default Page;
