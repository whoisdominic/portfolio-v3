import React from "react";
import styles from "../../styles/Home.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function Footer() {
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <footer className={styles.footer}>
      <a href="tel:2064896538">
        {mobile ? <PhoneIcon fontSize="large" /> : <PhoneIcon />}
      </a>
      <span />
      <a href="mailto: me@dominiccobb.dev">
        {mobile ? <EmailIcon fontSize="large" /> : <EmailIcon />}
      </a>
      <span />
      <a href="http://www.github.com/whoisdominic" target="_blank">
        {mobile ? <GitHubIcon fontSize="large" /> : <GitHubIcon />}
      </a>
      <span />
      <a href="https://www.linkedin.com/in/dominiccobb/" target="_blank">
        {mobile ? <LinkedInIcon fontSize="large" /> : <LinkedInIcon />}
      </a>
    </footer>
  );
}
