import React from "react";

const TeamMembers = ({ members }) => {
  const Item = ({ name, job, image }) => {
    return (
      <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src={image}
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">{name}</p>
          <p class="text-base text-gray-400 font-normal">{job}</p>
        </div>
      </div>
    );
  };
  return (
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Item name={member.name} job={member.job} image={member.img} />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
