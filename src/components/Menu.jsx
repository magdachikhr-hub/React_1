import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        {!isOpen && (
          <button onClick={() => setIsOpen(true)}>
            <svg
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="3" fill="#36536B" />
              <rect y="7" width="28" height="3" fill="#36536B" />
              <rect y="14" width="28" height="3" fill="#36536B" />
            </svg>
          </button>
        )}

        {isOpen && (
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="fill-zinc-900"
              width="22"
              height="23"
              stroke="black"
              viewBox="0 0 22 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Combined Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9999 9.37887L2.16112 0.540039L0.0397949 2.66136L8.87863 11.5002L0.0397949 20.339L2.16112 22.4604L11 13.6215L19.8388 22.4603L21.9601 20.339L13.1213 11.5002L21.9601 2.66136L19.8388 0.540039L10.9999 9.37887Z"
                  fill="#FBFCFE"
                />
              </g>
            </svg>
          </button>
        )}
      </nav>
    </>
  );
}

export default Menu;
