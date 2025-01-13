import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode? assets.logo_dark : assets.logo}
          alt="footer logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6" />
          ebenezeracquah237@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          &copy; 2025 EbenSuccess
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/eben-success/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Eben-Success">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" href="https://medium.com/@ebenezeracquah237">
                Medium
              </a>
            </li>
            <li>
              <a target="_blank" href="https://x.com/EbenSuccess3">
                X
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;
