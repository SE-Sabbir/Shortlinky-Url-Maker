import React, { useState } from "react";
import navlogo from "../assets/images/shortlinky_textlogo.png";
import navlogo2 from "../assets/images/shortlinky_favicon.png";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import { RiShare2Line } from "react-icons/ri";
import { LuScanQrCode } from "react-icons/lu";
import axios from "axios";

const Home = () => {
  // -------------copy url part---------------
  const [copy, setcopy] = useState(false);

  const handelcopy = () => {
    setcopy(true);

    setTimeout(() => {
      setcopy(false);
    }, 3000);

    // -----copy text to clipboard---------
    var copyText = document.querySelector(".urlText");
    navigator.clipboard.writeText(copyText.innerHTML);
  };
  // ------------ short url part -----------------

  const [longUrl, setLongUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [urlResponse, setUrlResponse] = useState("");

  const handelshort = (e) => {
    e.preventDefault();
    if (!longUrl) return setUrlError("! Please Enter a Long Url Link");
    setUrlError("");

    axios
      .post("http://localhost:8000/url/sendLongUrl", { longUrl })
      .then((res) => {
        setUrlResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLongUrl("");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center bg-[#faf3f3] dark:bg-[#000000] ">
        <div className="w-full py-4 lg:px-40 px-3 lg:mb-50 mb-20  flex justify-between dark:bg-[#faf3f3] bg-[#000000]">
          <div className=" flex items-center">
            <div className="lg:w-[50px] w-[40px]">
              <img className="w-full" src={navlogo2} alt="logo" />
            </div>
            <div className="lg:w-[200px] w-[150px] ">
              <img src={navlogo} alt="logo" />
            </div>
          </div>
          <button className="font-poppins font-normal text-xl  lg:py-2 py-1 lg:px-6 px-4 rounded-[6px] active:scale-105 bg-[#0fc7bb] ">
            login
          </button>
        </div>
        <h1 className="font-poppins font-bold lg:text-6xl text-3xl text-center text-[#0fc7bb]">
          Shorten Your Looooong Links
        </h1>
        <h3 className="lg:w-[600px] w-[300px] py-5 font-poppins font-normal lg:text-xl text-[16px] text-center dark:text-[#faf3f3] text-[#3d3d3d] ">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </h3>
        <p className=" font-poppins font-light dark:text-[#ffff00] text-[#ff0000] ">{urlError}</p>
        <div className="lg:w-[600px] w-auto mt-5 flex bg-[#ffffff] rounded-[6px] overflow-hidden shadow-md ">
          <form className="w-full flex items-center justify-between border py-2 px-3 rounded-[6px]  ">
            <input
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-full flex-1/2 outline-none"
              type="text"
              placeholder="Enter your url"
            />
            <button
              onClick={handelshort}
              className=" font-poppins font-normal py-2 px-3 ml-4 rounded-[6px] active:scale-105 bg-[#0fc7bb] "
            >
              Shorten Now
            </button>
          </form>
        </div>
        {urlResponse && (
          <div className=" lg:w-[600px] w-[350px] my-3 flex flex-col items-center ] ">
            <h2 className=" font-poppins font-light font lg:text-[16px] text-[14px] text-center text-[#807e7e] ">
              LongUrl: {urlResponse.longUrl}
            </h2>
            <div className="w-full my-5 flex items-center justify-between rounded-[6px] overflow-hidden shadow-lg bg-[#10d4c7] ">
              <h2 className="w-[90px] h-full py-2 pl-3 font-poppins font-normal text-[16px] bg-[#0fc7bb]">
                Short url :
              </h2>
              <a
                target="_blank"
                href={urlResponse.shortUrl}
                className=" px-4 py-2 underline font-poppins font-light text-[16px] text-[#ffffff] "
              >
                <span className="urlText">{urlResponse.shortUrl}</span>
              </a>
              <div className=" lg:w-[100px] w-[150px] flex items-center justify-between mx-5 ">
                {copy ? (
                  <button className=" active:scale-108 text-[#ffffff]">
                    <LuCopyCheck />
                  </button>
                ) : (
                  <button onClick={handelcopy} className="active:scale-108">
                    <LuCopy />
                  </button>
                )}
                <button>
                  <RiShare2Line />
                </button>
                <button>
                  <LuScanQrCode />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
