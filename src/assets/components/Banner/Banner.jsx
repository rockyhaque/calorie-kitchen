const Banner = () => {
  return (
    <div
      className="hero h-[750px] rounded-2xl font-lexend"
      style={{
        backgroundImage: "url(https://i.ibb.co/C595fy9/cook.jpg)",
      }}
    >
      <div className="hero-overlay rounded-2xl bg-opacity-3"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="mx-32">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Indulge in a uniquely tailored cooking class experience, crafted to
            suit your tastes and preferences, our personalized approach ensures
            a rewarding and enriching experience that&apos;s tailored
            exclusively for you.
          </p>
          <div className="space-x-6">
            <button className="btn rounded-full bg-customGreen border-0 font-bold text-lg px-6">
              Explore Now
            </button>
            <button className="btn rounded-full bg-transparent  font-bold text-lg px-6 text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
