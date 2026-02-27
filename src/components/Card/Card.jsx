function Card() {
  const cardData = [
    {
      id: 1,
      title: "Card Title",
      value: 128,
      change: "+12%",
      color: "bg-green-300",
    },
    {
      id: 2,
      title: "Card Title 2",
      value: 256,
      change: "-8%",
      color: "bg-orange-300",
    },
    {
      id: 3,
      title: "Card Title 3",
      value: 512,
      change: "+20%",
      color: "bg-blue-300",
    },
    {
      id: 4,
      title: "Card Title 4",
      value: 1024,
      change: "-5%",
      color: "bg-red-300",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className=" p-4 py-6 relative overflow-hidden bg-white/20 backdrop-blur-sm rounded-xl"
        >
          <h3>{card.title}</h3>
          <div className="flex justify-between items-baseline mt-2">
            <h2>{card.value}</h2>
            <span>{card.change}</span>
          </div>
          <div
            className={`${card.color} p-1 w-full absolute bottom-0 left-0`}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Card;
