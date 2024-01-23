import clsx from "clsx";
import styles from "./gallery.module.scss";
import Navbar from "@/components/molecules/navbar/Navbar";

export default function Gallery() {
  return (
    <section className={clsx(styles.gallery)}>
      <h1>Gallery Page</h1>
      <Navbar data={["Find Recipe", "Gallery", "About"]} />
    </section>
  );
}
