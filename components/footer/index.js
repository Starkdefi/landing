import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../assets/icons/logo.svg";
import Powered from "../../assets/icons/powered.svg";
import Arrow from "../../assets/icons/arrow-v2.svg";
import Discord from "../../assets/icons/discord.svg";
import Medium from "../../assets/icons/medium.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Github from "../../assets/icons/github.svg";

import { Button } from "../button";

const socials = [
  {
    url: "https://discord.gg/",
    Icon: Discord,
  },
  {
    url: "https://medium.com/",
    Icon: Medium,
  },
  {
    url: "https://twitter.com/",
    Icon: Twitter,
  },
  {
    url: "https://telegram.me/",
    Icon: Telegram,
  },
  {
    url: "https://github.com/",
    Icon: Github,
  },
];

export function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <section className="max-container flex items-start justify-between">
        <div className="w-[55%]">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <a>
                <Logo className={styles.logo} />
              </a>
            </Link>
            <p className="flex items-center gap-2 opacity-40 pt-4">
              <Powered />
              <span className="text-white font-CeraPro-Light leading-[160%]">
                Powered by StarkNet
              </span>
            </p>
          </div>
          <div className="flex items-center gap-8 pt-28">
            <a href="#">
              <Button className="text-[18px] text-green_light bg-green_2 rounded">
                <p className="flex gap-3 items-center py-1">
                  Contact Us <Arrow className={styles.arrow} />
                </p>
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button className="text-[18px]" type="ringed">
                <p className="flex gap-3 items-center py-1">
                  Join Our Community <Arrow className={styles.arrow} />
                </p>
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.section_column}>
          <div>
            <h3 className={styles.section_head}>Documentation</h3>
            <div className="flex items-start justify-between flex-col pt-4">
              <a className={styles.section_nav_link} href="/#" target="_blank">
                Litepaper (coming soon)
              </a>

              <a
                className={styles.section_nav_link}
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to connect wallet
              </a>

              <a
                className={styles.section_nav_link}
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resources
              </a>
            </div>
          </div>
          <a
            className={styles.tos_pp}
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>

        <div className={styles.section_column}>
          <div>
            <h3 className={styles.section_head}>Social</h3>
            <div className="flex items-center justify-between gap-3 pt-4">
              {socials.map((social) => (
                <a
                  className={styles.section_nav_link}
                  href={social.url}
                  target="_blank"
                  key={social.url}
                  rel="noopener noreferrer"
                >
                  <social.Icon className={styles.social_icon} />
                </a>
              ))}
            </div>
          </div>
          <a
            className={styles.tos_pp}
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>
      </section>
    </footer>
  );
}
