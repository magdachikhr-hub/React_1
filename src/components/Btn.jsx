import { useState } from "react";

function ButtonSecond(props) {
  const [isShown, setShown] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShown(!isShown);
        }}
      >
        used for props {props.count}
      </button>

      {/* {isShown ? <div className="bg-[red] w-15 h-15"></div> : null} */}
      {isShown && <div className="bg-[red] w-15 h-15"></div>}
    </>
  );
}

export default ButtonSecond;
