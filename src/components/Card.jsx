function Card() {
  return (
    <>
      <div className="w-87.5 rounded-[10px] bg-white p-7.75 flex flex-col items-center">
        <span className="text-lg text-[#6E728E] font-bold">Basic</span>
        <span className="text-7xl text-[#4A4D60] font-bold">$19.99</span>
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
          <span className="text-[15px] text-[#6E728E] font-bold">
            500 GB Storage
          </span>
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
          <span className="text-[15px] text-[#6E728E] font-bold">
            2 Users Allowed
          </span>
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
          <span className="text-[15px] text-[#6E728E] font-bold">
            Send up to 3 GB
          </span>
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
