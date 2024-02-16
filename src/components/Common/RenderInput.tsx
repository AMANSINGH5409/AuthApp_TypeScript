import React, { useRef, useState } from "react";

interface IRenderInput {
  type?: string;
  label: string;
  message?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  onchange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RenderInput = ({
  type,
  label,
  message,
  icon,
  value,
  placeholder,
  onchange,
}: IRenderInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const checkBoxRef = useRef<HTMLInputElement>(null);

  const handleCheckbox = () => {
    checkBoxRef.current?.click();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let fieldType = null;
  switch (type) {
    case "email":
      fieldType = (
        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-normal text-[color:var(--textLight)]">
            {label}
          </h1>
          <div className="p-3 rounded-xl border flex items-center gap-2">
            <img src={icon} alt="inputIcon" className="w-4" />
            <input
              className="text-sm w-full border-none outline-none"
              type={type}
              onChange={onchange}
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
      );
      break;
    case "password":
      fieldType = (
        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-normal text-[color:var(--textLight)]">
            {label}
          </h1>
          <div className="p-3 rounded-xl border flex items-center gap-2">
            <img src={icon} alt="inputIcon" className="w-4" />
            <input
              className="text-sm w-full border-none outline-none"
              type={showPassword ? "text" : type}
              onChange={onchange}
              placeholder={placeholder}
              value={value}
            />
            {type === "password" && (
              <p
                onClick={handleShowPassword}
                className="text-xs font-bold cursor-pointer text-[color:var(--textLight)]"
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            )}
          </div>
        </div>
      );
      break;
    case "checkbox":
      fieldType = (
        <div className="">
          <div
            onClick={handleCheckbox}
            className="flex items-baseline gap-2 cursor-pointer"
          >
            <input
              ref={checkBoxRef}
              type="checkbox"
              name="check"
              id="check"
              checked
              onChange={onchange}
            />

            <div className="">
              {label && <h1 className="text-sm font-medium">{label}</h1>}
              {message && (
                <p className="text-xs font-light text-[color:var(--textLight)]">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      );
      break;
    default:
      fieldType = (
        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-semibold">{label}</h1>
          <div className="p-3 rounded-xl border flex items-center gap-2">
            <img src={icon} alt="inputIcon" className="w-5" />
            <input
              className="text-sm w-full border-none outline-none"
              type={type}
              onChange={onchange}
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
      );
  }

  return <div className="flex flex-col gap-1">{fieldType}</div>;
};

export default RenderInput;
