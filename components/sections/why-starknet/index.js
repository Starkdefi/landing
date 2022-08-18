import { SimpleLink, Title } from "../../utils";
import styles from "./why.module.css";
import fast from "../../../assets/images/fast-txn.png";
import low_gas from "../../../assets/images/low-gas.png";
import trustless from "../../../assets/images/trustless.png";
import more from "../../../assets/images/more.png";
import Image from "next/image";
import Script from "next/script";
import { Fade } from "react-awesome-reveal";

const slides = [
  {
    title: "Fast Transactions",
    content: `
      Starknet uses the zk-rollup technology which provides faster
      transactions. It uses validity proofs which are generated
      after the execution of a transaction to verify the transaction
      before it is recorded on Ethereum mainnet. As such, it does
      not alter or cancel the time required to receive the
      confirmation that a blockchain transaction is final, hence,
      improving transaction speed.
    `,
  },
  {
    title: "Low Gas Fees",
    content: `
      With the zk-rollup technology, starknet can effectively reduce
      the gas fee cost as it combines multiple transactions into a
      single one before returning validity proof to the mainnet and
      recording it. This enables sharing of gas fees with
      participants, making it a whole lot cheaper.
    `,
  },
  {
    title: "Trustless",
    content: `
      Users do not have to place their trust in any institution or
      third party to interact with contracts. You simply have to
      trust the code which is open source and can be checked and
      verified.
    `,
  },
  {
    title: "And more...",
    content: `
      Starknet also supports scalability while preserving the
      security of L1 Ethereum and provides composability, to
      facilitate easy development and innovation. To know more about
      Starknet, head over to their website by clicking on “Learn
      More”.
    `,
  },
];

export function StarkSlides() {
  return (
    <section className={`${styles.container} max-container`}>
      <div className="">
        <div className="flex items-baseline justify-between">
          <Fade triggerOnce="true" direction="up">
            <Title className="text-white text-left">
              Why <span className="text-green_light">StarkNet?</span>
            </Title>

            <SimpleLink
              className="text-white opacity-[0.85]"
              arrowClass="stroke-white opacity-[0.85]"
              url="https://starknet.io/"
              target="_blank"
              text="Learn More"
            />
          </Fade>
        </div>
        <div
          id="slides-container"
          className="flex mt-12 justify-between cursor-all-scroll  "
        >
          <div
            className={`md:w-[60%] max-h-[23rem] overflow-y-auto no-scrollbar`}
          >
            {slides.map(({ title, content }, i) => (
              <div
                key={i}
                id={`slide-${i}`}
                className={`${
                  i == 0 ? "slide_active" : "slide_inactive"
                } h-[90%]`}
              >
                <Fade triggerOnce="true" direction="up">
                  <h2 className="">{title}</h2>
                  <p className="">{content}</p>
                </Fade>
              </div>
            ))}
          </div>
          <div className="lg:w-[35%] w-[30%] py-8 md:block hidden sticky top-0">
            <div data-slide="slide-0" data-hidden="false">
              <Image src={fast} alt="slide" />
            </div>
            <div data-slide="slide-1" data-hidden="true">
              <Image src={low_gas} alt="slide" />
            </div>
            <div data-slide="slide-2" data-hidden="true">
              <Image src={trustless} alt="slide" />
            </div>
            <div data-slide="slide-3" data-hidden="true">
              <Image src={more} alt="slide" />
            </div>
          </div>
        </div>
      </div>
      <Script id="slide_script">
        {`
        const slide_container = document.querySelector('#slides-container');

        // const scroll_listener = slide_container.addEventListener('scroll', () => {
          
        //   document.querySelectorAll("div[id|='slide']").forEach((slide) => {
        //     console.log(slide.id, slide_container.offsetTop, slide.offsetTop, slide.offsetHeight, )
        //   })
          
        // })

        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
          
            // console.log(entry.isIntersecting, entry)

            if (entry.isIntersecting) {
              document.querySelector(\`div[data-slide=\${id}]\`).setAttribute('data-hidden', false);

              entry.target.classList.remove('slide_inactive')
              entry.target.classList.add('slide_active')

            } else {
              document.querySelector(\`div[data-slide=\${id}]\`).setAttribute('data-hidden', true);
              entry.target.classList.remove('slide_active')
              entry.target.classList.add('slide_inactive')
            }
          });
        }, {threshold: 1});
      
        // Track all sections that have an id applied
        document.querySelectorAll("div[id|='slide']").forEach((slide) => {
          observer.observe(slide);
        });
        `}
      </Script>
    </section>
  );
}
