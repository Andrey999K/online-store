interface BadgeProps {
  text: string;
  type: string;
  color?: string;
}

const Badge = ({ text, type, color }: BadgeProps) => {
  let colorBadge = color ? `bg-[${color}]` : "bg-sky-500";
  if (type === "super") colorBadge = "bg-green-500";
  return <div className={colorBadge + " inline-block box-border text-white text-[12px] py-1 px-2 rounded"}>{text}</div>;
};

Badge.defaultProps = {};

export default Badge;
