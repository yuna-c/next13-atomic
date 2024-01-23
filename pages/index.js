import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Pic from "@/components/atoms/pic/Pic";
import styles from "./Home.module.scss";
import clsx from "clsx";
import Text from "@/components/atoms/text/Text";

export default function Home({ meals }) {
  console.log("ssg", meals);
  const mealsData = meals.slice(0, 5);
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>

      <main className={clsx(styles.main)}>
        <h1>Main page</h1>
        <Text url={"/"} tagName={"h1"} styleType={"logo"}>
          blabla
        </Text>

        <Text tagName={"h2"} styleType={"title1"}>
          blabla comes here
        </Text>

        <Text styleType={"slogan"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed
          voluptatem illo nam eum excepturi totam optio vero! Deleniti tenetur
          obcaecati labore nisi saepe maiores eveniet commodi perspiciatis
          deserunt dolore.
        </Text>
      </main>
    </>
  );
}

//ssg방식으로 페이지 렌더링
export async function getStaticProps() {
  const { data } = await axios.get("/filter.php?c=Seafood");
  return { props: data, revalidate: 60 * 60 * 24 };
}
