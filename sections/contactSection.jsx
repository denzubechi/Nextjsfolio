import {  } from "react";
import Link from "next/link";
import { Envelope } from "phosphor-react";
import styles from "../styles/contact.module.scss";

export default function ContactSection() {
 return(
        <section className={styles.contact} id="contact">
          <h4>Got a project in mind?</h4>
          <h2>
            Get In Touch.{" "}
            <Link href="mailto:chukwumasamuel371@gmail.com">
              <Envelope color="#ABABAD" weight="regular" size={80} />
            </Link>
          </h2>
          <Link href="mailto:chukwumasamuel371@gmail.com">
            <p>chukwumasamuel371@gmail.com</p>
          </Link>
          <Link href="tel:+2349134914531">
            <p> +(234) 913 491 4531</p><p> +(234) 908 215 5508</p>
          </Link>
        </section>
    
  );
}
