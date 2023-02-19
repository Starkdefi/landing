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
    url: "https://discord.com/invite/starkdefi",
    Icon: Discord,
  },
  {
    url: "https://starkdefi.medium.com/",
    Icon: Medium,
  },
  {
    url: "https://twitter.com/StarkDefi",
    Icon: Twitter,
  },
  {
    url: "https://t.me/starkdefi_ann",
    Icon: Telegram,
  },
  {
    url: "https://github.com/Starkdefi",
    Icon: Github,
  },
];

export function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <section className="xl:max-container md:px-8 px-4 m-auto flex items-start justify-between flex-wrap md:flex-nowrap">
        <div className="lg:w-[55%] md:w-[40%] w-full">
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
          <div className="flex items-center lg:gap-8 gap-4 xl:pt-28 lg:pt-24 md:pt-12 pt-8 lg:flex-nowrap flex-wrap md:pb-0 pb-8">
            <a
              href="mailto:starkdefi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="xl:text-[18px] md:text-[14px] text-[12px] text-green_light bg-green_2 rounded">
                <p className="flex gap-3 items-center py-1">
                  Contact Us <Arrow className={styles.arrow} />
                </p>
              </Button>
            </a>
            <a
              href="https://linktr.ee/starkdefi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="txl:text-[18px]  md:text-[14px] text-[12px]"
                type="ringed"
              >
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
              <a
                className={styles.section_nav_link}
                href="https://docs.starkdefi.com/introduction/roadmap-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Litepaper
              </a>

              <a
                className={styles.section_nav_link}
                href="https://docs.starkdefi.com/quick-start/connect-to-starkdefi"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to connect wallet
              </a>

              <a
                className={styles.section_nav_link}
                href="https://docs.starkdefi.com/extras/resources"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resources
              </a>
            </div>
          </div>
          <a
            className={styles.tos_pp}
            href="https://docs.starkdefi.com/extras/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>

        <div className={styles.section_column}>
          <div>
            <h3 className={styles.section_head}>Social</h3>
            <div className="flex items-center lg:justify-between justify-start lg:flex-nowrap flex-wrap gap-3 pt-4">
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
            href="https://docs.starkdefi.com/extras/terms-of-use"
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
