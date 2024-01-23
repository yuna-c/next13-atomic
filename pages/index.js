import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Pic from "@/components/atoms/pic/Pic";
import clsx from "clsx";
import Text from "@/components/atoms/text/Text";
import styles from "./Home.module.scss";
import List from "@/components/atoms/list/List";
import Input from "@/components/atoms/input/Input";
import { useState } from "react";

export default function Home({ meals }) {
  console.log("ssg", meals);
  const mealsData = meals.slice(0, 5);
  const topRated = ["Avartar", "Emma", "AquaMan"];
  const url = ["/", "/gallery", "/about"];
  const [Val, setVal] = useState("");
  console.log(Val);

  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>

      <main className={styles.main}>
        <List data={topRated} tagName={"ol"} divider={"-"} url={url} />
        <Input value={Val} onChange={setVal} type={"password"} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("/filter.php?c=Seafood");
  return { props: data, revalidate: 60 * 60 * 24 };
}
