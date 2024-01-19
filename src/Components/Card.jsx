import React from "react";
import img from "../Assets/img/next.png";
import img2 from "../Assets/img/prev.png";
import full from "../Assets/img/full.png";
import plus from "../Assets/img/plus.png";

export default function Card() {
  return (
    <div>
      <div className="title mt-12 ml-40">
        <h1
          style={{
            background:
              "linear-gradient(0deg, rgba(22,66,100,1) 0%, rgba(0,54,179,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          className="text-3xl font-bold">
          {" "}
          Relation And Function ( Mathematics )
        </h1>
        <div className="items flex text-lg gap-8 justify-center mt-12">
          <h1 className="text-blue-900 underline font-bold">Study</h1>
          <h1>Quiz</h1>
          <h1>Test</h1>
          <h1>Game</h1>
          <h1>Other</h1>
        </div>
        <div className="land flex justify-center mt-8">
          <div
            className="flashcard h-[400px] w-[600px] rounded-3xl "
            style={{
              background: "rgb(22,66,100)",
              background:
                "linear-gradient(to left bottom, #002051, #09336c, #114889, #165ea7, #1775c5)",
            }}>
            <div className="items flex justify-between p-5">
              <div className="bulb">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/25/light.png"
                  alt="light"
                  style={{ color: "white" }}
                />
              </div>
              <div className="speaker">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/25/speaker.png"
                  alt="speaker"
                />
              </div>
            </div>
            <div className="number flex justify-center text-5xl mt-28 text-white">
              9 + 4 + 7x - 2x - 3
            </div>
          </div>
        </div>
        <div className="next flex justify-center mt-5 gap-32">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/rotate.png"
            alt="rotate"
          />
          <div className="back rounded-full  flex justify-center items-center gap-8 ">
            <img src={img2} alt="" />
            <h1 className="text-2xl">01/10</h1>
            <img src={img} alt="" />
          </div>
          <img src={full} alt="" />
        </div>
        <div className="develope flex justify-between mx-16 mt-28">
          <div className="left flex gap-3">
            <div className="circle rounded-full bg-white w-20 h-20 drop-shadow-2xl flex items-center justify-center text-blue-900">
              Logo
            </div>
            <div className="text">
              <p className="text-sm font-bold text-gray-500">Published By</p>
              <h1 className="text-3xl text-blue-900 font-semibold flex">
                Hygge <p className="font-bold">X</p>
              </h1>
            </div>
          </div>
          <div className="right flex justify-between">
            <div className="img">
              <img src={plus} alt="" />
            </div>
            <div className="text">
              <h1 className="text-xl font-semibold pt-2 text-blue-900">
                Create FLashcard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
