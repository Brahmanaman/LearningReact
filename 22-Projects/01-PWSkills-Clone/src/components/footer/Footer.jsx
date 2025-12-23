import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div>
          <img
            className="w-40 h-16"
            src="https://t4.ftcdn.net/jpg/15/03/82/19/360_F_1503821973_R2VnPKl1uIgKUVsqsoypddimTfW6IpJ9.jpg"
            alt=""
          />
          <p className="my-4">Email us: support@pwskills.com</p>
          <img
            className="w-32 h-32"
            src="https://static.vecteezy.com/system/resources/thumbnails/028/613/916/small/iso-9001-certified-rubber-stamp-badge-label-logo-qms-standard-international-quality-management-systems-approved-emblem-with-check-mark-business-design-elements-png.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">PW Skills</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>Discord Channel</p>
            <p>Pw Youtube</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
