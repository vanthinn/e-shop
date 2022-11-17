import React, { useState } from "react";

function VideoBanner(props) {
  const [isShowing, setIsShowing] = useState(false);

  const handleSetShow = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div
      className="flex h-[80vh] bg-no-repeat bg-cover  "
      style={{
        backgroundImage: `url("${"https://d-themes.com/react/molla/demo-5/images/home/bg-2.jpg"}")`,
      }}
    >
      <div className="m-auto text-center text-slate-50">
        <span className="text-2xl">NEW COLLECTION</span>
        <h3 className="text-6xl text-slate-50 my-5">Winter’19 / Spring’20</h3>

        <button className="relative group" onClick={handleSetShow}>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 z-30 group-hover:text-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-[22%] left-[26%] translate-[-50%, -50%] w-9 h-9 text-transparent group-hover:text-slate-50 "
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span
            className="absolute top-[50%] left-[50%] w-[60px] h-[60px] rounded-full z-0
             translate-[-50%, -50%] scale-110 bg-white/30 animate-video"
          ></span>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 left-0 bottom-0 transitions-theme  ${
          isShowing
            ? "block visibility-visible opacity-100"
            : "visibility-hidden"
        }`}
      >
        <div
          className={`absolute top-0 right-0 left-0 bottom-0 bg-slate-500/80 transitions-theme ${
            isShowing ? "opacity-100 z-[400]" : "opacity-0"
          }`}
          onClick={handleSetShow}
        ></div>
        <div className="absolute top-[50%] left-[50%] z-[500] transitions-theme w-[70%]  ">
          {isShowing && (
            <div
              className={`absolute w-full transitions-theme   ${
                isShowing ? "opacity-100 " : "opacity-0"
              } `}
            >
              <iframe
                className="absolute top-[-50%] left-[-50%] translate-y-[-50%]  w-full z-[500]"
                src="https://www.youtube.com/embed/vBPgmASQ1A0"
                title="GEORGES HOBEIKA Haute Couture Autumn Winter 2018/19 collection"
                frameBorder="0"
                height={500}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

VideoBanner.propTypes = {};

export default VideoBanner;
