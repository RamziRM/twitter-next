interface BtnProps {
  label?: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Btn: React.FC<BtnProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          secondary
            ? "bg-white text-black border-black"
            : "bg-sky-500 text-white border-sky-500"
        }
        ${large ? "text-xl" : "text-md"}
        ${large ? "py-3 px-5" : "py-2 px-4"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white text-white" : ""}
        `}
    >
      {label}
    </button>
  );
};

export default Btn;
