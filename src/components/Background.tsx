function Background() {
  return (
    <>
      {/* 🌤 Base serene blue background (same as Hero system) */}
      <div className="fixed inset-0 bg-[#C9D6DF] -z-10" />

      {/* 💙 Soft aqua glow */}
      <div className="fixed top-[-140px] left-[-140px] w-[520px] h-[520px] bg-[#B0E0E6]/55 blur-[180px] rounded-full"></div>

      {/* 🌫 Sky blue glow */}
      <div className="fixed bottom-[-140px] right-[-140px] w-[520px] h-[520px] bg-[#C5E8F7]/60 blur-[180px] rounded-full"></div>

      {/* ☁️ Center mist glow */}
      <div className="fixed top-1/2 left-1/2 w-[450px] h-[450px] bg-[#AEC6CF]/55 blur-[190px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
}

export default Background;