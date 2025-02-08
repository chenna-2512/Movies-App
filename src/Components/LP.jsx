import Aboutus from '../Utility/Aboutus';
import Contanct from '../Utility/Contanct';
import Home from '../Utility/Home';
import Strike from '../Utility/Strike';
// import Movies from '../Utility/Movies';
import Styles from '../Components/lp.module.css';
const LP = () => {
  return (
    <>
      <header className={Styles.header}>
        <Strike/>
        <Aboutus />
        <Contanct />
      </header>
      <section>
        <Home/>
      </section>
    </>
  )
}

export default LP
