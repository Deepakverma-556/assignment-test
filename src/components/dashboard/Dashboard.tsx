"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Dashboard = () => {
  const out = useRouter();
  function remove() {
    localStorage.removeItem("formValue");
    out.push("/");
  }

  const [image, setImage] = useState([]);
  const [_, setUrl] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(e.target.files[0]);
    setUrl(url);
    setImage([...image, url]);
  };

  const deleteImage = () => {
    setImage([]);
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 flex py-11 min-h-screen">
        <div className="flex flex-col gap-3 w-32">
          <button
            onClick={() => remove()}
            className="border border-black rounded-xl px-2 py-1"
          >
            log out
          </button>
          <button>question 1</button>
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            multiple
            onChange={uploadImage}
            hidden
            type="file"
            id="connect"
          />
          <label
            htmlFor="connect"
            className="bg-blue py-[10px] px-[20px] rounded text-white cursor-pointer"
          >
            +
          </label>
          {image.length === 0 ? (
            ""
          ) : (
            <button
              onClick={deleteImage}
              className="bg-red-500 py-[10px] px-[20px] mx-3 rounded text-white cursor-pointer"
            >
              Delete
            </button>
          )}
          <div className="flex gap-5 flex-wrap items-center mb-5">
            {image.map((item, index) => {
              return (
                <div
                  className="w-max overflow-hidden group max-w-[500px] justify-center"
                  key={index}
                >
                  <img
                    className="max-w-96 h-32 w-full object-cover group-hover:scale-110 transition-all duration-300"
                    src={item}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
