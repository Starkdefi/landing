import styles from "./navbar.module.css";
import Logo from "../../assets/icons/logo.svg";
import { Button } from "../button";
import Link from "next/link";
import Script from "next/script";

export function NavBar() {
  return (
    <nav
      id="navbar"
      className={`${styles.container} fixed top-0 left-0 right-0 z-[60]`}
    >
      <div className="xl:max-container max-w-[940px] m-auto flex items-center justify-between py-5 px-4 my-0">
        <button className={styles.apps_button}>
          <span className="uppercase text-[19px] leading-[24px]">Apps</span>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.54401 0.897461H6.07721C6.92989 0.897461 7.62122 1.75014 7.62122 2.44147V6.97467C7.62122 7.82735 6.92989 8.51868 6.07721 8.51868H1.54401C0.69133 8.51868 0 7.666 0 6.97467V2.44147C0 1.58879 0.69133 0.897461 1.54401 0.897461V0.897461Z"
              fill="white"
            />
            <path
              d="M9.03621 3.61602L12.2417 0.41054C12.8447 -0.192434 13.9365 -0.0782927 14.4253 0.41054L17.6308 3.61602C18.2338 4.21899 18.2338 5.19665 17.6308 5.79963L14.4253 9.0051C13.8223 9.60808 12.7305 9.49394 12.2417 9.0051L9.03621 5.79963C8.43324 5.19665 8.43324 4.21899 9.03621 3.61602V3.61602Z"
              fill="#00DA63"
            />
            <path
              d="M1.54401 10.376H6.07721C6.92989 10.376 7.62122 11.2287 7.62122 11.92V16.4532C7.62122 17.3059 6.92989 17.9972 6.07721 17.9972H1.54401C0.69133 17.9972 0 17.1445 0 16.4532V11.92C0 11.0673 0.69133 10.376 1.54401 10.376V10.376Z"
              fill="#00DA63"
            />
            <path
              d="M11.0887 10.376H15.6219C16.4746 10.376 17.1659 11.2287 17.1659 11.92V16.4532C17.1659 17.3059 16.4746 17.9972 15.6219 17.9972H11.0887C10.236 17.9972 9.54468 17.1445 9.54468 16.4532V11.92C9.54468 11.0673 10.236 10.376 11.0887 10.376V10.376Z"
              fill="white"
            />
          </svg>
        </button>

        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className="md:block hidden">
          <a href="https://app.starkdefi.com/" target="_blank" rel="noreferrer">
            <Button type="ringed" className="text-[13.1px] w-[136px] py-2">
              Launch
            </Button>
          </a>
        </div>
      </div>
      <Script id="nav" strategy="afterInteractive">
        {`
           let prevScrollpos = window.pageYOffset;
           window.onscroll = function() {

           let currentScrollPos = window.pageYOffset;

           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").classList.add("nav_bar");
           } else {
            document.getElementById("navbar").classList.remove("nav_bar");
           }
             if (prevScrollpos > currentScrollPos) {
               document.getElementById("navbar").style.top = "0";
             } else {
               document.getElementById("navbar").style.top = "-10%";
             }
             prevScrollpos = currentScrollPos;
           }
          `}
      </Script>
    </nav>
  );
}
