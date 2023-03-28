import React, { useContext } from "react";
import { data1, data2 } from "../App";
import bgVideo from '../assets/bgVideo.mp4'

export const Home3 = () => {
  const NAME = useContext(data1);
  const LNAME = useContext(data2);

  return (
    <div className="video-main">
        <div className="overdeep"></div>
          <video src={bgVideo} autoPlay loop muted/>

      <div className="content">
        Hiii Mr. {NAME} {LNAME}
      </div>

    
    </div>
  );
};
