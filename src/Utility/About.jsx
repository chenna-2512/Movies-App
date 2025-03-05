import Header from "../Utility/Header";

const About = () => {
  return (
    <>
      <Header />
    <div className="bg-dark text-light min-vh-100">

      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4">About Us 🎬</h1>
        <p className="text-center fs-5">
          Welcome to <span className="fw-bold">Movies App</span>, your go-to platform for discovering movies effortlessly! Whether you are a casual viewer or a hardcore movie buff, our app ensures you get all the details you need in one place.
        </p>

        <div className="row mt-4 text-center text-md-start">
          <div className="col-md-6">
            <h2 className="fw-bold">What We Offer?</h2>
            <ul className="fs-5 list-unstyled">
              <li>🎥 Interactive Movie Cards – Instant movie details on click.</li>
              <li>⭐ Ratings & Reviews – Get insights before you watch.</li>
              <li>📅 Release Dates & Genres – Stay updated on upcoming films.</li>
              <li>🎭 Cast & Crew Details – Know who is behind the scenes.</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold">Our Mission</h2>
            <p className="fs-5">
              We aim to make movie discovery effortless, fun, and interactive. 
              <span className="fw-bold"> Movies App</span> is built for every movie lover.
            </p>
            <h2 className="fw-bold mt-4">Built With ❤️ Using</h2>
            <p className="fs-5">🚀 ReactJS, Bootstrap, React Router</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <h2 className="fw-bold">Check out the code & contribute:</h2>
          <a 
            href="https://github.com/chenna-2512/Movies-App" 
            className="btn btn-outline-light px-4 py-2 mt-2 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo 🔗
          </a>
        </div>
      </div>
    </div>
            </>
  );
};

export default About;
