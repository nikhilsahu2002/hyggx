import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="bar flex justify-between mt-3  mx-20 ">
        <div className="logo text-purple-700 mx-32 flex">
          <img src="" alt="logo" />
          <h1 className="text-2xl"> Hygger</h1>
        </div>
        <div className="items gap-7 flex text-base items-baseline">
          <h1>Home</h1>
          <h1>Flashcard</h1>
          <h1>Contact</h1>
          <h1>FAQ</h1>
          <button
            className="rounded-full px-10 py-2  text-white"
            style={{
              background: "rgb(22,66,100)",
              background:
                "linear-gradient(0deg, rgba(22,66,100,1) 0%, rgba(0,54,179,1) 100%)",
            }}>
            Login
          </button>
        </div>
      </div>
      <div className="navigater mx-40 mt-10 flex items-baseline ">
        <div className="home">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/home--v2.png"
            alt="home--v2"
          />
        </div>
        <div className="arrow flex gap-1">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/windows/20/forward.png"
            alt="forward"
          />
          <h1 className="text-base">Flashcard</h1>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/windows/20/forward.png"
            alt="forward"
          />
          <h1 className="text-base">Mathematics</h1>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/windows/20/forward.png"
            alt="forward"
          />
          <h1 className="text-base text-blue-900 font-bold">
            Relation And Function
          </h1>
        </div>
      </div>
    </div>
  );
}
