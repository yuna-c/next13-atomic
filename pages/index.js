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
        <Text tagName={"h1"}>Hello</Text>
        <Text tagName={"p"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          fugiat tenetur, voluptate quia nulla distinctio quaerat aliquam
          eligendi blanditiis repellendus placeat atque, veritatis optio culpa
          ducimus, magni quo dolorum itaque!
        </Text>
        <Text>안녕하세요.</Text>
      </main>
    </>
  );
}

//ssg방식으로 페이지 렌더링
export async function getStaticProps() {
  const { data } = await axios.get("/filter.php?c=Seafood");
  return { props: data, revalidate: 60 * 60 * 24 };
}
