import { SimpleLink, Title } from "../../utils";
import styles from "./why.module.css";
import fast from "../../../assets/images/fast-txn.png";
import low_gas from "../../../assets/images/low-gas.png";
import trustless from "../../../assets/images/trustless.png";
import more from "../../../assets/images/more.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useRef, useEffect } from "react";

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
    image: fast,
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
    image: low_gas,
  },
  {
    title: "Trustless",
    content: `
      Users do not have to place their trust in any institution or
      third party to interact with contracts. You simply have to
      trust the code which is open source and can be checked and
      verified.
    `,
    image: trustless,
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
    image: more,
  },
];

export function StarkSlides() {
  const slideRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target } = entry;

          if (entry.isIntersecting) {
            target.classList.add("active_slide");
          } else {
            target.classList.remove("active_slide");
          }
        });
      },
      {
        rootMargin: "-1px 0px 0px 0px",
        threshold: 0.9,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        io.observe(slide);
      }
    });
  }, [slideRefs]);

  return (
    <section id="slides-parent" className={`${styles.container} max-container`}>
      <div className="">
        <div className="flex items-baseline justify-between">
          <Fade triggerOnce="true" direction="up">
            <Title className="text-white text-left">
              Why <span className="text-green_light">Starknet?</span>
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
        <div className="flex mt-12 justify-between cursor-all-scroll relative">
          <div
            id="slides-container"
            className="lg:max-h-[365px] max-h-[266px] overflow-y-auto no-scrollbar flex flex-col gap-8 snap-y snap-mandatory"
          >
            {slides.map(({ title, content, image }, i) => (
              <div
                id={`slide-${i}`}
                key={i}
                ref={(ref) => {
                  slideRefs.current[i] = ref;
                }}
                className="py-2 flex justify-between snap-start md:h-[220px] opacity-[0.15] transition-opacity duration-300 ease-in-out"
              >
                <div className="md:w-3/5">
                  <Fade triggerOnce="true" direction="up">
                    <h2 className="xl:pl-10 md:pl-8 pl-4 text-white xl:text-[26px] lg:text-[24px] text-[22px] leading-[160%] border-l-2 border-solid border-white">
                      {title}
                    </h2>
                    <p className="xl:pl-10 md:pl-8 pl-4 font-CeraPro-Medium text-white opacity-[0.65] xl:text-[18px] lg:text-[16px] text-[12px] pt-2 leading-[160%]">
                      {content}
                    </p>
                  </Fade>
                </div>
                <div className="lg:w-[210px] lg:h-[258px] h-[170px]  w-[220px] relative overflow-hidden hidden md:block">
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    placeholder="blur"
                    src={image}
                    alt={title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
