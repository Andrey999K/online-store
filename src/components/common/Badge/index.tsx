import { Badge } from "../../../types";

interface BadgeProps extends Omit<Badge, "id"> {
  color?: string;
}

export const BadgeProduct = ({ text, type, color }: BadgeProps) => {
  let colorBadge = color ? `bg-[${color}]` : "bg-sky-500";
  colorBadge = type === "super" ? "bg-green-500" : colorBadge;
  return (
    <div
      className={
        colorBadge +
        " inline-block box-border text-white text-[12px] py-1 px-2 rounded"
      }
    >
      {text}
    </div>
  );
};
