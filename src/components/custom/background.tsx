const Background = () => {
  return (
    <div
      className="absolute inset-0 -z-10 opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
      style={{
        backgroundImage: `url("https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg")`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto", // or specific size like '50px 50px' if needed
      }}
    />
  );
};

export default Background;
