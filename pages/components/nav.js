import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";
import TelegramIcon from "@material-ui/icons/Telegram";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Footer() {
  const mobile = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </Link>
        <Link href="/portfolio">
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={"Portfolio"} />
          </ListItem>
        </Link>
        <Link href="/resume">
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={"Resume"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );
  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
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
      </div>

      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className={styles.hamburgerIcon}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
