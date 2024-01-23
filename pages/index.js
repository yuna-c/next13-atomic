import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Pic from "@/components/atoms/pic/Pic";
import clsx from "clsx";
import Text from "@/components/atoms/text/Text";
import styles from "./Home.module.scss";

export default function Home({ meals }) {
  console.log("ssg", meals);
  const mealsData = meals.slice(0, 5);

  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>

      <main className={styles.main}>
        {/* <Text url={"/"} tagName={"h1"} styleType={"logo"}>
          DCODELAB
        </Text>

        <Text tagName={"h2"} styleType={"title1"}>
          Title comes here.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit
          vero voluptate accusamus magni cum sit perspiciatis quisquam officia
          sed.
        </Text> */}

        <Text styleType={"slogan"}>Slogan</Text>
        <Text styleType={"slogan"} className={clsx(styles.customTit, styles.a)}>
          {/* className={clsx(styles.customTit)} 프롭스 암호화 값으로전달 */}
          Slogan2
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
