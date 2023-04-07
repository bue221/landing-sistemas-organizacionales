import React from "react";

const AvatarFooter = ({
  name,
  img = "https://www.material-tailwind.com/img/face-2.jpg",
}) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <img
        class="relative inline-block h-8 w-8 rounded-lg object-cover object-center"
        alt="Image placeholder"
        src={img}
      />
      <p>{name}</p>
    </div>
  );
};

export default AvatarFooter;
