import Styles from '../Utility/styles.module.css';
// import Style from '../Components/lp.styles.css';
import Home from './Home';
import AboutUs from './Aboutus';
import Contanct from './Contanct';
const Salaar = () => {
  return (
    <>    
      <header className={Styles.header}>
        <Home />
        <AboutUs />
        <Contanct />
      </header>
      <div className={Styles.container}>
        <div className={Styles.movieCard}>
          <img src="/src/assets/salaar.jpeg" alt="Salaar" className={Styles.salaar}/>
          <div className={Styles.movieContent}>
            <h2 className={Styles.mainheading}>Salaar</h2>
            <div className={Styles.review}>
              <p><span>&#9733;9/10</span> (137.8k Votes)</p>
              <button className={Styles.ratenow}>Rate Now</button>
            </div>
            <div className={Styles.btn}>
              <button>2D</button>
              <button>IMAX 2D</button>
              <button>Telugu</button>
              <button>Hindi</button>
              <button>Tamil</button>
              <button>Kanada</button>
              <button>Malayalam</button>
            </div>
            <p className={Styles.description}>2hrs 55min . Action,Thriller . A . 22 Dec,2023</p>
          </div>
          <div className={Styles.movieDescription}>
            <h2 className={Styles.aboutMovie}>About Movie</h2>
            <p className={Styles.mContent}>Brace yourself for an extraordinary tale of rebellion filled with power-packed action.</p>
            <h2 className={Styles.aboutMovie}>Cast</h2>
            <p className={Styles.mContent}>Prabhas, Shruthi Hasan, Pruthviraj Sukumaran</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Salaar
