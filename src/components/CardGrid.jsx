const CardGrid = () => {
  const cards = [
    { title: "Staggered Text Animations", time: "12 MIN" },
    { title: "Complex Sequence Animations", time: "14 MIN" },
    { title: "Parallax Effects", time: "13 MIN" },
    { title: "On-Scroll Reveal Animation", time: "11 MIN" },
    { title: "Advanced Sortable Drag & Drop", time: "21 MIN" },
    { title: "Advanced Framer Motion Tips", time: "7 MIN" },
    { title: "On-Scroll Reveal Animation", time: "11 MIN" },
    { title: "Advanced Sortable Drag & Drop", time: "21 MIN" },
    { title: "Advanced Framer Motion Tips", time: "7 MIN" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative w-96 h-48 p-6 flex flex-col justify-between 
                       bg-green-300 rounded-xl border border-neutral-800 
                       transition-all duration-300 ease-in-out 
                       hover:bg-green-200"
          >
            <div className="flex justify-between items-center text-sm">
              <span>⏱ {card.time}</span>
              <span>👁</span>
            </div>
            <h2
              className="text-xl font-medium 
                         transition-all duration-300 ease-in-out 
                         group-hover:text-2xl group-hover:text-black-90"
            >
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
