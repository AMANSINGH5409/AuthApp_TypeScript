interface IFeatureButton {
  icon: string | undefined;
  title: string;
}

const FeatureButton = ({ icon, title }: IFeatureButton) => {
  return (
    <button
      type="button"
      className="p-2 flex border items-center justify-center rounded-xl gap-2 w-full"
    >
      {icon && <img src={icon} alt="featureBtnIcon" className="w-4" />}
      <p className="text-sm font-semibold text-[#666]">{title}</p>
    </button>
  );
};

export default FeatureButton;
