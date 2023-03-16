import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const VideoIntro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="h-[50vh] relative">
      <video
        ref={vidRef}
        src="https://res.cloudinary.com/demo/video/upload/q_auto,vc_av1/wxo4blppvc14jgm5iaih.webm"
        type="video/mp4"
        loop
        poster="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678942632/rickandmorty/2880737_rwqaud.webp"
        controls={false}
        className="w-full h-full object-fill"
      />
      <div
        className="absolute inset-0 flex justify-center items-center w-full"
        style={{
          background: "rgba(0,0,0,0.65)",
        }}
      >
        <div className="w-full h-full rounded flex justify-center items-center">
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              fontSize={40}
              className="cursor-pointer"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={40}
              className="cursor-pointer"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
