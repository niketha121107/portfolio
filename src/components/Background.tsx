function Background() {
  return (
    <>
      {/* Base dark theme */}
      <div className="fixed inset-0 bg-[#0b0b1a] -z-10" />

      {/* Purple glow */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Pink glow */}
      <div className="fixed bottom-20 right-20 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Extra soft glow */}
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
}

export default Background;