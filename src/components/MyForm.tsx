"use client";
import React, { useState } from "react";
import { Google } from "@/utils/icons";
import Image from "next/image";
import { Slide, toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

// interface define
interface FormState {
  email: string;
  password: string;
  customCheckBox: boolean;
}

const MyForm = () => {
const myRoute = useRouter()
  // initialstate
  const myState:FormState = {
    email: "",
    password: "",
    customCheckBox: false,
  };

  // create states
  const [formValue, setFormValue] = useState(myState);
  const [error, setError] = useState();

  // on submit function
  function handleSubmit(e) {
    e.preventDefault();
    const newError = {};

    // define errors
    if (formValue.email === "") newError.email = "email is required*";
    if (formValue.password === "") newError.password = "password is required*";
    else if (formValue.password.length < 6)
      newError.password = "password must be atleast 6 digit*";
    if (formValue.customCheckBox === false)
      newError.customCheckBox = "fill the checkbox*";
    setError(newError);

    // empty state and setitem in local storage
    if (Object.keys(newError).length === 0) {
      localStorage.setItem("formValue", JSON.stringify(formValue));
      setFormValue(myState);
      toast("submit successfully");
      myRoute.push("/dashboard")
    }
  }
  return (
    <div className="pt-[30px] pb-56 max-sm:pt-8 max-sm:pb-24 overflow-x-hidden">
      <ToastContainer position="top-right" transition={Slide} />
      <div className="max-w-[1172px] mx-auto px-4 max-sm:px-[35px] flex items-center w-full justify-between relative">
        <div className="max-w-[456px] w-full max-lg:mx-auto">
          <a href="http://localhost:3000/">
            <Image
              width={163}
              height={31.71}
              src={"/assets/images/png/logo.png"}
              alt="logo"
            />
          </a>
          <h2 className="font-semibold text-3xl leading-[58.5px] pt-[138px] max-sm:pt-[90px]">
            Welcome Back
          </h2>
          <p className="text-sm leading-[30px] text-gray pb-[31px]">
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="font-medium text-base leading-5 cursor-pointer"
            >
              {" "}
              Email <br />
              <input
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
                id="email"
                type="email"
                placeholder="Email"
                className="border border-lightGray rounded-lg py-[21.34px] px-[14px] w-full mt-1 outline-none placeholder:text-sm placeholder:leading-6 placeholder:text-gray"
              />{" "}
              {error?.email && <p className="text-red-600">{error.email}</p>}
            </label>
            <label
              htmlFor="password"
              className="font-medium text-base leading-5 cursor-pointer flex flex-col mt-[18px]"
            >
              {" "}
              Password <br />
              <input
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
                id="password"
                type="password"
                placeholder="••••••••"
                className="border border-lightGray rounded-lg py-[21.34px] px-[14px] w-full mt-1 outline-none placeholder:text-sm placeholder:leading-6 placeholder:text-gray"
              />
              {error?.password && (
                <p className="text-red-600">{error.password}</p>
              )}
            </label>
            <div className="flex justify-between pt-[18px] max-sm:flex-wrap">
              <label
                htmlFor="checkbox"
                className="font-inter text-base leading-6 text-darkGray cursor-pointer"
              >
                <input
                  checked={formValue.customCheckBox}
                  onChange={(e) =>
                    setFormValue({
                      ...formValue,
                      customCheckBox: e.target.checked,
                    })
                  }
                  id="checkbox"
                  type="checkbox"
                  className="mr-3 cursor-pointer"
                />{" "}
                Remember for 30 days
                {error?.customCheckBox && (
                  <p className="text-red-600 font-medium">
                    {error.customCheckBox}
                  </p>
                )}
              </label>
              <p className="font-inter cursor-pointer text-base leading-6 max-sm:w-full text-blue max-sm:pt-[14px]">
                Forgot password
              </p>
            </div>
            <button
              type="submit"
              className="font-medium mt-6 max-sm:mt-[19px] mb-[6px] text-sm leading-6 text-nowrap bg-black text-white w-full text-center py-[9.5px] rounded-lg"
            >
              Sign In
            </button>
            <button className="font-medium text-sm leading-5 flex items-center justify-center text-nowrap text-black w-full py-[10.5px] rounded-lg border border-lightGray gap-[10px]">
              <Google /> Sign in with Google
            </button>
            <p className="text-base leading-6 font-inter text-gray sm:text-center pt-[18px]">
              Don't have an account?{" "}
              <span className="text-blue cursor-pointer">Sign up</span>
            </p>
          </form>
        </div>
        <Image
          width={759}
          height={899}
          src={"/assets/images/png/hero.png"}
          alt="hero"
          className="absolute -right-40 top-0 max-xl:w-[600px] max-lg:hidden"
        />
      </div>
    </div>
  );
};

export default MyForm;
