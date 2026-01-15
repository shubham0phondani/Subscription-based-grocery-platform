import GroceryImg from "../assets/GroceryImg.png"
const Hero = () => {
  return (
    <div className="flex felx-col items-center justify-center w-[735px] h-screen border-r-2 border-gray-200 bg-gradient-to-br from-green-500 to-indigo-800">

      <div className="rounded-3xl bg-white/10 backdrop-blur-sm w-max">
        <img
          className="w-[520px] -rotate-3 transition-transform duration-500 hover:scale-105 hover:-rotate-1 drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)]"
          src={GroceryImg}
          alt="Groceries"
        />
      </div>

    </div>
  );
};

export default Hero;
