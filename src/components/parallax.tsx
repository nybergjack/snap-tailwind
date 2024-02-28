function Parallax() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <div className="snap-start bg-red-950 w-screen h-screen flex items-center justify-center text-8xl">
        1
      </div>
      <div className="snap-start bg-blue-950 w-screen h-screen flex items-center justify-center text-8xl">
        2
      </div>
      <div className="snap-start bg-green-950 w-screen h-screen flex items-center justify-center text-8xl">
        3
      </div>
    </div>
  );
}

export default Parallax;
