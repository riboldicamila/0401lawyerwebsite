
const TeamMemberCard = ({ member }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-64 w-48 sm:w-56 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-lg font-serif font-medium text-gray-800 mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600 font-light tracking-wider">
          {member.position}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
