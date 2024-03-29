type btnType = "submit" | "reset" | "button" | undefined;

interface IMainButton {
  type: btnType;
  title: string;
  onclick(): void;
}

const MainButton = ({ type, title, onclick }: IMainButton) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className="bg-[var(--primaryColor)] px-6 py-3 text-white text-sm font-semibold rounded-lg"
    >
      {title}
    </button>
  );
};

export default MainButton;
