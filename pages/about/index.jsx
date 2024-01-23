import Navbar from "@/components/molecules/navbar/Navbar";
import styles from "./about.module.scss";
import clsx from "clsx";
export default function About() {
  return (
    <section>
      <Navbar data={["Find Recipe", "Gallery", "About"]} />
    </section>
  );
}
