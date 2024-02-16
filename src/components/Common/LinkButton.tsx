import { Link } from "react-router-dom";

type linkType = "block" | "inline";

interface ILinkButton {
  url: string;
  text: string;
  type: linkType;
}

const applyType = {
  block: "w-full p-2 text-center",
  inline: "w-fit font-normal",
};

const LinkButton = ({ url, text, type }: ILinkButton) => {
  return (
    <Link
      to={url}
      className={`${applyType[type]} text-sm font-semibold text-[color:var(--primaryColor)] underline`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
