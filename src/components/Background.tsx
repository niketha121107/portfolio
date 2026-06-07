function Background() {
  return (
    <>
      {/* 🌑 Base dark background */}
      <div className="fixed inset-0 bg-[#1a1a1f] -z-10" />

      {/* 🌸 Dusty rose glow — top left */}
      <div className="fixed top-[-140px] left-[-140px] w-[520px] h-[520px] bg-[#3d1f2d]/70 blur-[180px] rounded-full -z-10" />

      {/* 💜 Deep plum glow — bottom right */}
      <div className="fixed bottom-[-140px] right-[-140px] w-[520px] h-[520px] bg-[#2a1a2e]/60 blur-[180px] rounded-full -z-10" />

      {/* 🌫 Mauve centre mist */}
      <div className="fixed top-1/2 left-1/2 w-[450px] h-[450px] bg-[#2e1a28]/40 blur-[190px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />
    </>
  );
}

export default Background;