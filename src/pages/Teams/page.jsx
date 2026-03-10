import TeamCard from "../../components/Team/TeamCard";

const teamMembers = [
  {
    name: "Ashoka Tano",
    role: "Product Design",
    location: "Chicago",
    image: "https://i.pravatar.cc/150?img=32",
    bg: "bg-cyan-800/30",
  },
  {
    name: "Boba Fett",
    role: "Bounty Hunter",
    location: "Tatooine",
    image: "https://i.pravatar.cc/150?img=12",
    bg: "bg-cyan-800/30",
  },
  {
    name: "Han Solo",
    role: "Smuggler",
    location: "Tatooine",
    image: "https://i.pravatar.cc/150?img=44",
    bg: "bg-cyan-800/30",
  },
  {
    name: "Leia Organa",
    role: "Rebel Leader",
    location: "Alderaan",
    image: "https://i.pravatar.cc/150?img=22",
    bg: "bg-cyan-800/30",
  },
];

function page() {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl md:p-6 p-4">
      {/* <h2 className="text-xl font-semibold mb-6">My Team</h2> */}

      {/* Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default page;
