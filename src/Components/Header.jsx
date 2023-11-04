import retrato from "../assets/retrato.png";
import ContentMainOne from "./ContentMainOne";
import ContentMainTwo from "./ContentMainTwo";
import Footer from "./Footer";
import styles from "../styles/Headers.module.css";

function Header() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.group}>
            <img
              className={styles.retrato}
              src={retrato}
              width={317}
              height={317}
              alt="image retrato"
            />
            <ContentMainOne />
            <Footer iconLinked={false} />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.group}>
            <img src={retrato} width={317} height={317} alt="image retrato" />
            <ContentMainOne linked={false} widthButtonEmail="247px" />
            <Footer />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.group}>
            <img
              className={styles.retrato}
              src={retrato}
              width={317}
              height={317}
              alt="image retrato"
            />
            <ContentMainTwo />

            <Footer background="#D5D4D8" iconLinked={false} />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.group}>
            <img src={retrato} width={317} height={317} alt="image retrato" />
            <ContentMainTwo
              background="#F5F5F5"
              linked={false}
              widthButtonEmail="247px"
            />
            <Footer background="#D5D4D8" iconLinked={true} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Header;
