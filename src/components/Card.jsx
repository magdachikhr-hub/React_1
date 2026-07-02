import Button from "./Button";

function Card({ info }) {
  return (
    <>
      <div className="card w-87.5 rounded-[10px] bg-white p-7.75 flex flex-col items-center">
        <span className="text-lg text-[#6E728E] font-bold">{info.plan}</span>
        <span className="text-7xl text-[#4A4D60] font-bold tracking-[-2.16px] leading-17.75 ">
          ${info.sum}
        </span>
        <div className="mt-5 mb-5 w-full flex flex-col items-center">
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
          <span className="text-[15px] text-[#6E728E] font-bold">
            {info.storage} Storage
          </span>
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
          <span className="text-[15px] text-[#6E728E] font-bold">
            {info.users} Users Allowed
          </span>
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
          <span className="text-[15px] text-[#6E728E] font-bold">
            Send up to {info.send} GB
          </span>
          <div className="w-full h-px bg-[#DBDCE2] mt-3 mb-3"></div>
        </div>
        <Button></Button>
      </div>
    </>
  );
}

export default Card;

//props
