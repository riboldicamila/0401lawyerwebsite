import { useState } from "react";

export default function TeamMemberCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:w-64 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        {/* Curved frame effect */}
        <div
          className="absolute inset-0 border-2 border-blue-200 rounded-lg"
          style={{
            borderRadius: "40% 40% 0 0 / 10%",
            transform: "scale(1.05)",
            borderBottom: "none",
          }}
        ></div>

        <img
          src={member.image}
          alt={member.name}
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-xl font-medium mb-1">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.position}</p>
      </div>
    </div>
  );
}
