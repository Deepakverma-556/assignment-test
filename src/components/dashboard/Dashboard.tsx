"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // log out
  function remove() {
    localStorage.removeItem("formValue");
    out.push("/");
  }

  // image upload state
  const [image, setImage] = useState([]);
  const [_, setUrl] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showSection2, setShowSection2] = useState(false);

  useEffect(() => {
    const section = searchParams.get("section");
    setShowQuestion(section === "question1");
    setShowSection2(section === "question2");
    setShowUpload(section === "question3");
  }, [searchParams]);

  const uploadImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setUrl(url);
    setImage([...image, url]);
  };

  // image delete
  const deleteImage = () => {
    setImage([]);
  };

  const Question = [
    {
      list: {
        data: [
          {
            title: "What is the capital of India?",
            options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
          },
        ],
      },
    },
  ];
  const title = Question[0].list.data[0].title;
  const options = Question[0].list.data[0].options[0];

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
          <button
            onClick={() => {
              router.push("/dashboard/?section=question1");
            }}
          >
            question 1
          </button>
          <button
            onClick={() => {
              router.push("/dashboard/?section=question2");
            }}
          >
            question 2
          </button>
          <button
            onClick={() => {
              router.push("/dashboard/?section=question3");
            }}
          >
            question 3
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          {showQuestion && (
            <p>
              {title} {options}
            </p>
          )}
          {showSection2 && (
            <div className="py-96 App">
              <InlineWidget
                url="https://calendly.com/deepakradialcode"
                pageSettings={{
                  backgroundColor: "#000",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: false,
                  primaryColor: "#ff0000",
                  textColor: "#f6f6f6",
                }}
              />
            </div>
          )}
          {showUpload && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
