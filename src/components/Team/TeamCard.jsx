import Button from "../Button/Button";

function TeamCard({ name, role, location, image, bg }) {
  return (
    <div
      className={`rounded-2xl p-6 text-center shadow-sm ${bg} transition hover:shadow-md`}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4 w-max relative mx-auto">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
        />
        {/* <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span> */}
      </div>

      {/* Info */}
      <h3 className="font-semibold text-gray-800">{name}</h3>

      <p className="text-sm  mt-1">
        {role} • {location}
      </p>

      {/* Button */}
      <div className="mt-5">
        <Button variant="primary" size="md">
          Send Message
        </Button>
      </div>
    </div>
  );
}

export default TeamCard;
