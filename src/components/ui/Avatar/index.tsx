import React from "react";

interface AvatarProps {
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden border-2 border-solid border-gray-300">
      <img src={src} alt="avatar" />
    </div>
  );
};
