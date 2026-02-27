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
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="border border-gray-200 rounded-md p-4 shadow relative overflow-hidden"
        >
          <h3>{card.title}</h3>
          <div className="flex justify-between items-baseline mb-4 mt-2">
            <h2>{card.value}</h2>
            <span>{card.change}</span>
          </div>
          <div
            className={`${card.color} p-2 w-full absolute bottom-0 left-0`}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Card;
