import React from "react";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";

const firstName = "Mohamed Ali";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-6">
      <div className="card bg-blue-300 shadow-xl w-80 p-5 rounded-2xl">
        <Image />
        <Name />
        <Price />
        <Description />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">
          {firstName ? `Bonjour ${firstName}` : "Bonjour !"}
        </h3>
        {firstName && (
          <img
            src="/images/github.png"
            alt="github"
            className="w-16 h-16 rounded-full mx-auto mt-3"
          />
        )}
      </div>
    </div>
  );
}
