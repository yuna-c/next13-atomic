import clsx from "clsx";
import styles from "./pic.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Pic({ imgSrc, imgTxt, url }) {
  console.log(imgTxt);
  return (
    <div className={clsx(styles.pic, imgTxt && styles.picTxt)}>
      <Image
        src={imgSrc}
        alt={imgSrc}
        priority
        fill
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
      />
      {imgTxt && <h2>{imgTxt}</h2>}
      {url && <Link href={url}></Link>}
    </div>
  );
}
