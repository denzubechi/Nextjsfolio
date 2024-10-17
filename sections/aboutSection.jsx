import {} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Memoji from "../images/[removal 1.png";
import WavyHand from "../images/wavy 1.png";
import styles from "../styles/about.module.scss";
import { helloVariant } from "../variants/index.js";

export default function AboutSection() {
  return (
    <section className={styles.about_me} id="about">
      <div className={styles.about_me_main}>
        <div className={styles.about_me_main_s1}>
          <div className={styles.about_me_main_s1_p}>
            <h5>
              Hello there{" "}
              <motion.div
                initial={`hidden`}
                animate={`visible`}
                variants={helloVariant()}
                className={styles.wavyhand}
                //
              >
                <Image
                  src={WavyHand}
                  width={25}
                  height={25}
                  alt="My memoji smiling face"
                />
              </motion.div>{" "}
              , meet
            </h5>
            <h2>Samuel Nzubechi</h2>
            <p>
              Experienced full-stack web developer skilled in React/Next.js,
              Node.js, Flask, MongoDB, and PostgreSQL. Expert in backend
              architectures and Docker for scalable deployments. Strong
              collaborator with excellent communication skills. Committed to
              continuous learning and crafting clean, efficient code for
              intuitive user experiences.
            </p>

            <button className={styles.hire_me_btn}>
              <Link
                href="https://docs.google.com/document/d/1VE72KrJFq3RJSSbvNqQCkrv0CoZUI7FK9imwSCG3wCA/edit"
                target="_blank"
              >
                View Resume
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.about_me_main_s2}>
          <img
            //src={Memoji}
            src="https://res.cloudinary.com/dqny2b4gb/image/upload/v1729123752/47f40d1d-e9f7-4c26-bb74-d9361bd3934a_frohxv.jpg"
            className={styles.about_me__memoji}
            layout="fill"
            alt="My memoji smiling face"
          />
        </div>
      </div>
    </section>
  );
}
