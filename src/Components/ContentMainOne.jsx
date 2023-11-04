import styles from "../styles/MainOne.module.css";
import iconEmail from "../assets/email-48.png";

// eslint-disable-next-line react/prop-types
const ContentMainOne = ({ widthButtonEmail = '115px', linked = true }) => {
    const optionTwo = {
        width: widthButtonEmail
    }
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.h1}>Laura Smith</h1>
        <h3 className={styles.h3}>Frontend Developer</h3>
        <h5 className={styles.h5}>laurasmith.website</h5>

        <div className={styles.buttons}>
          <button className={styles.buttonEmail} style={optionTwo}>
            <img className={styles.emailIcon} src={iconEmail} alt="iconEmail" />
            <p>Email</p>
          </button>
          {linked ? 
            <button className={styles.buttonLinkedIn} >
            <svg
              className={styles.linkedIcon}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7143 0.333344H1.28273C0.758923 0.333344 0.333328 0.764891 0.333328 1.29465V12.7054C0.333328 13.2351 0.758923 13.6667 1.28273 13.6667H12.7143C13.2381 13.6667 13.6667 13.2351 13.6667 12.7054V1.29465C13.6667 0.764891 13.2381 0.333344 12.7143 0.333344ZM4.36309 11.7619H2.3869V5.39882H4.36607V11.7619H4.36309ZM3.375 4.52977C2.74107 4.52977 2.22916 4.01489 2.22916 3.38394C2.22916 2.75299 2.74107 2.23811 3.375 2.23811C4.00595 2.23811 4.52083 2.75299 4.52083 3.38394C4.52083 4.01787 4.00892 4.52977 3.375 4.52977V4.52977ZM11.7708 11.7619H9.79464V8.66668C9.79464 7.92858 9.77976 6.97918 8.76785 6.97918C7.73809 6.97918 7.58035 7.78275 7.58035 8.61311V11.7619H5.60416V5.39882H7.5V6.26787H7.52678C7.79166 5.76787 8.4375 5.24108 9.39881 5.24108C11.3988 5.24108 11.7708 6.55953 11.7708 8.27382V11.7619V11.7619Z"
                fill="white"
              />
            </svg>
            <p className={styles.emailP}>LinkedIn</p>
          </button>
           : null}
         
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.h2}>About</h2>
        <p className={styles.p}>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2 className={styles.h2}>Interest</h2>
        <p className={styles.p}>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </>
  );
};

export default ContentMainOne;
