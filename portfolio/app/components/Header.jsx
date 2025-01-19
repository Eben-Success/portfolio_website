import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  const googleLink = "https://docs.google.com/document/d/1a4hmmUFrYIzQze8bzkTrwNHeG-nqT1rU-QXdS_ktSNo/export?format=pdf"
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32 mt-10"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi, I'm Ebenezer Acquah
        <Image src={assets.hand_icon} alt="" className="w-6" />{" "}
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Research and Teaching Assistant at University of Ghana
      </h1>
      <p>
        Machine Learning Researcher with interest in Computer Vision. Currently exploring Convolutional Neurual Network and 
        Vision Transformer models.

      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border broder-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />{" "}
        </a>

        <a
          href={googleLink}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex
        items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
