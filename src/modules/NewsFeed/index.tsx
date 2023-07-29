import { NextPage } from "next";
import GroupOfPost from "./GroupOfPost";
import { useCallback, useEffect, useState } from "react";

const NewsFeed: NextPage<{urlString:string | undefined}> = ({urlString="/photos"}) => {
  const [afterArr, setAfterArr] = useState<Array<number>>([1]);
  const [noOfReels, setNoOfReels] = useState<number>(1);

  const [readyState, setReadyState] = useState<boolean>(true);

  useEffect(() => {
    console.log({ readyState, noOfReels });
  }, [readyState,noOfReels]);

  const addAnotherReel = () => {
    const newArr = [...afterArr];
    console.log(newArr, noOfReels);
    newArr.push(noOfReels);
    setAfterArr(newArr);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("scroll", scrollListen, { passive: true });
    }, 3000);

    return () => {
      window.removeEventListener("scroll", scrollListen);
    };
  }, []);

  const scrollListen = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPerc = ((height - winScroll) / height) * 100;
    console.log(scrolledPerc,readyState,noOfReels);

    if (scrolledPerc < 30 / noOfReels && readyState === true) {
      setReadyState(false);
      window.removeEventListener("scroll", scrollListen);
      
      setNoOfReels((prev) => prev + 1);

      console.log({ noOfReels})
      addAnotherReel();
      setTimeout(() => {
        window.addEventListener("scroll", scrollListen, { passive: true });
      }, 3700);
    }
  };

  return (
    <div className="">
      {afterArr.map((afterVal) => (
        <GroupOfPost
          setReadyState={setReadyState}
          key={afterVal}
          page={noOfReels}
          urlString={urlString}
        />
      ))}
      {readyState ? (
        <button
          className=""
          onClick={() => {
            addAnotherReel();
          }}>
          Show More
        </button>
      ) : null}
    </div>
  );
};

export default NewsFeed;
