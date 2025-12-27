const Button = ({ text, logo, isEmail }) => {
  return (
    <>
      <button
        className={` ${
          isEmail ? "text-black border" : "bg-black text-white"
        } flex items-center justify-center gap-2 uppercase py-1 px-2 rounded-sm text-center w-full cursor-pointer text-sm md:text-base`}
      >
        {logo}
        {text}
      </button>
    </>
  );
};

export default Button;
