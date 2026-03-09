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
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
      {cardData.map((card) => (
        <div
          key={card.id}
          className=" p-4 relative overflow-hidden  bg-white/70 rounded-xl shadow-xs "
        >
          <h3>{card.title}</h3>
          <div className="flex justify-between items-baseline mt-6">
            <span className="text-white lg:text-2xl text-xl lg:font-semibold font-medium bg-cyan-800 p-2 rounded-md">
              {card.value}
            </span>
            <span className="text-black">{card.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
