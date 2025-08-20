const Video = () => {
  return (
    <section className="hidden sm:block w-full min-h-screen overflow-hidden">
      <video
        src="/videos/006.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-h-screen object-cover"
      />
    </section>
  );
};

export default Video;
