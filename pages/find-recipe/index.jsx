import clsx from "clsx";
import styles from "./find-recipe.module.scss";
import Breadcrumb from "@/components/molecules/breadcrumb/Breadcrumb";
import { useRouter } from "next/router";

export default function FindRecipe() {
  const path = useRouter().asPath;
  return (
    <section className={clsx(styles.findRecipe)}>
      <h1>Find-recipe</h1>
      <Breadcrumb path={path} />
    </section>
  );
}
