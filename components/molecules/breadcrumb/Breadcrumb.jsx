import clsx from "clsx";
import styles from "./breadcrumb.module.scss";
import Text from "@/components/atoms/text/Text";
import React from "react";

export default function Breadcrumb({ path }) {
  const pathArr = path.split("/");

  return (
    <nav className={clsx(styles.breadcrumb)}>
      {pathArr.map((name, idx) => {
        if (idx === pathArr.length - 1) {
          return (
            <Text key={idx} tagName={"span"} isOn>
              {name}
            </Text>
          );
        } else {
          return (
            <React.Fragment key={idx}>
              <Text tagName={"span"} url={"/" + name}>
                {name === "" ? "Home" : name}
              </Text>
              <span>/</span>
            </React.Fragment>
          );
        }
      })}
    </nav>
  );
}
