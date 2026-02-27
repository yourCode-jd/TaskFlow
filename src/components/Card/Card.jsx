function Card() {
  const cardData = [
    {
      id: 1,
      title: "Card Title",
      value: 128,
      change: "+12%",
    },
    {
      id: 2,
      title: "Card Title 2",
      value: 256,
      change: "-8%",
    },
    {
      id: 3,
      title: "Card Title 3",
      value: 512,
      change: "+20%",
    },
    {
      id: 4,
      title: "Card Title 4",
      value: 1024,
      change: "-5%",
    },
  ];

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
      {cardData.map((card) => (
        <div
          key={card.id}
          className=" p-4 relative overflow-hidden  bg-purple-600/20 rounded-xl shadow-xs "
        >
          <h3>{card.title}</h3>
          <div className="flex justify-between items-baseline mt-6">
            <span className="text-2xl font-semibold bg-purple-600/30 p-2 rounded-md">
              {card.value}
            </span>
            <span className="text-white">{card.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
