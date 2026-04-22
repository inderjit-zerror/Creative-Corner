import React from "react";

const videoData = [
  `/Video/video1.mp4`,
  `/Video/video2.mp4`,
  `/Video/video3.mp4`,
  `/Video/video4.mp4`,
];

const WorkSection = () => {
  return (
    <div
      className={` w-full h-fit relative flex flex-col justify-center items-center bg-[#202020]`}
    >
      <div className="w-full h-fit flex justify-center items-center sticky top-0 left-0 mix-blend-difference py-10 z-50">
        <h1 className="text-[5vw] leading-[5vw]  text-white">[ WORK. ]</h1>
      </div>
      

      {videoData.map((item, index) => {
        return (
          <div key={index} className="w-1/3 h-fit flex flex-col mt-10">
            <div className="w-full h-svh  relative z-40 overflow-hidden">
              <video
                src={item}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-white text-[1.7vw] leading-[1.7vw] pt-5 pb-2">
              Project ~ {index + 1}
            </p>
            <p className="text-white/60 text-[1vw] leading-[1vw] pb-5 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkSection;
