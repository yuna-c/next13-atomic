import clsx from "clsx";
import styles from "./text.module.scss";
import React from "react";
import Link from "next/link";

export default function Text({ children, url, tagName = "p" }) {
  //JSX를 반환하는 리액트 내장 메서드
  //React.createElement(elementType:string, props:object, children: JSX Node)
  //return <h1 className={clsx(styles.text)}>{children}</h1>;
  return React.createElement(
    tagName,
    { className: clsx(styles.text) },
    //url props가 있으면 React.createElement로 Link컴포넌트로 props값 설정한뒤 children감싸서 리턴
    url ? React.createElement(Link, { href: url }, children) : children
  );
}
