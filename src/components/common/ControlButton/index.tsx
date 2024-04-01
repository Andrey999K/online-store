import Icon from "../../ui/Icon";
import { Link } from "react-router-dom";

interface ControlButtonProps {
  icon?: string;
  text: string;
  url?: string;
  count?: number;
}

const ControlButton = ({ icon, text, url = "/", count }: ControlButtonProps) => {
  return (
    <Link
      to={url}
      className="text-xs lg:text-base flex flex-col justify-center items-center text-gray-400 hover:text-sky-500"
    >
      {icon && (
        <div className="relative">
          <Icon name={icon} className="w-[24px] h-[24px]" />
          {!!count && (
            <div className="absolute top-0 left-[calc(24px-0.5rem)] bg-sky-500 rounded-full text-xs text-white min-w-[1rem] px-1 flex justify-center items-center">
              {count}
            </div>
          )}
        </div>
      )}
      <span className="mt-[2px]">{text}</span>
    </Link>
  );
};

export default ControlButton;
