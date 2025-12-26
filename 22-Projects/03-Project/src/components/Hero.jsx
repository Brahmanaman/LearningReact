import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mt-10 max-w-285 m-auto md:mt-20">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="font-semibold text-gray-500 text-[13px] mt-2">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <div className="flex items-center gap-5 flex-col mt-10 ps-3 w-120 ">
        <div className="flex items-center gap-5 w-full">
          <Button text="via support chat" logo={<MdOutlineMessage />} />
          <Button text="via call" logo={<IoCall />} />
        </div>
        <Button
          text="via email form"
          isEmail={true}
          logo={<MdOutlineMessage />}
        />
        <form className="w-full px-5 flex flex-col gap-5 mt-5">
          <div className="flex flex-col">
            <label className="absolute bg-white -mt-2.5 ms-2.5" htmlFor="">
              Name
            </label>
            <input
              type="text"
              className="border  p-2 rounded-xs border-gray-400 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label className="absolute bg-white -mt-2.5 ms-2.5" htmlFor="">
              E-Mail
            </label>
            <input
              type="text"
              className="border  p-2 rounded-xs border-gray-400 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label className="absolute bg-white -mt-2.5 ms-2.5" htmlFor="">
              Text
            </label>
            <input
              type="text"
              className="border  p-2 rounded-xs border-gray-400 outline-0"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
