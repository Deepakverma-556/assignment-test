"use client";
import { openSync } from "fs";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Dashboard = () => {
  const router = useRouter();
  const params = useParams();
  const { questions } = params;

  // log out function
  function remove() {
    localStorage.removeItem("formValue");
    router.push("/");
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("formValue");
    if (!storedValue) {
      router.push("/");
    }
  }, [router]);

  // define states
  const [image, setImage] = useState<string[]>([]);
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setImage([...image, url] as any);
    } else {
      alert("not valid image");
    }
  };

  // image delete
  const deleteImage = () => {
    setImage([]);
  };

  // question 1
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

          {/* buttons */}
          <button
            className={`${
              questions === "question1" ? "bg-black text-white" : ""
            } border border-black rounded-xl px-2 py-1`}
            onClick={() => {
              router.push("/dashboard/question1");
            }}
          >
            question 1
          </button>
          <button
            className={`${
              questions === "question2" ? "bg-black text-white" : ""
            } border border-black rounded-xl px-2 py-1`}
            onClick={() => {
              router.push("/dashboard/question2");
            }}
          >
            question 2
          </button>
          <button
            className={`${
              questions === "question3" ? "bg-black text-white" : ""
            } border border-black rounded-xl px-2 py-1`}
            onClick={() => {
              router.push("/dashboard/question3");
            }}
          >
            question 3
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          {questions === "question1" ? (
            <div>
              <p>
                {title} {options}
              </p>
            </div>
          ) : questions === "question2" ? (
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
          ) : questions === "question3" ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
