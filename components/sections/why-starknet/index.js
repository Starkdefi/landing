import { SimpleLink, Title } from "../../utils";
import styles from "./why.module.css";
import fast from "../../../assets/images/fast-txn.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

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
        <div className="flex mt-12 justify-between cursor-all-scroll">
          <div
            className={`md:w-[60%] max-h-[23rem] overflow-y-auto no-scrollbar`}
          >
            <div className={styles.slide_active}>
              <Fade triggerOnce="true" direction="up">
                <h2 className="">Fast Transactions</h2>
                <p className="">
                  Starknet uses the zk-rollup technology which provides faster
                  transactions. It uses validity proofs which are generated
                  after the execution of a transaction to verify the transaction
                  before it is recorded on Ethereum mainnet. As such, it does
                  not alter or cancel the time required to receive the
                  confirmation that a blockchain transaction is final, hence,
                  improving transaction speed.
                </p>
              </Fade>
            </div>
            <div className={styles.slide_inactive}>
              <Fade triggerOnce="true" direction="up">
                <h2 className="">Low Gas Fees</h2>
                <p className="">
                  With the zk-rollup technology, starknet can effectively reduce
                  the gas fee cost as it combines multiple transactions into a
                  single one before returning validity proof to the mainnet and
                  recording it. This enables sharing of gas fees with
                  participants, making it a whole lot cheaper.
                </p>
              </Fade>
            </div>
            <div className={styles.slide_inactive}>
              <Fade triggerOnce="true" direction="up">
                <h2 className="">Trustless</h2>
                <p className="">
                  Users do not have to place their trust in any institution or
                  third party to interact with contracts. You simply have to
                  trust the code which is open source and can be checked and
                  verified.
                </p>
              </Fade>
            </div>
            <div className={styles.slide_inactive}>
              <Fade triggerOnce="true" direction="up">
                <h2 className="">And more...</h2>
                <p className="">
                  Starknet also supports scalability while preserving the
                  security of L1 Ethereum and provides composability, to
                  facilitate easy development and innovation. To know more about
                  Starknet, head over to their website by clicking on “Learn
                  More”.
                </p>
              </Fade>
            </div>
          </div>
          <div className="lg:w-[35%] w-[30%] py-8 md:block hidden">
            <Image src={fast} alt="slide" />
          </div>
        </div>
      </div>
    </section>
  );
}
