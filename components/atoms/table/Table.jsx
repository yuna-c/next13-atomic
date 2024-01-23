import clsx from "clsx";
import styles from "./table.module.scss";
import Text from "../text/Text";
/*
  thead
    (No, name, age, address)
  tbody
    tr(반복) > td(no), td(name), td(age), td(address)
*/

export function TableY({
  data,
  title,
  className,
  isCount = false,
  reverse = false,
}) {
  console.log(data);
  data = reverse ? [...data].reverse() : [...data];

  return (
    <>
      {title && (
        <Text tagName={"h1"} styleType={"title1"}>
          {title}
        </Text>
      )}

      <table className={clsx(styles.table, className)} border="1">
        <thead>
          <tr>
            {isCount && <th scope="col">No</th>}
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el, idx) => (
            <tr key={idx}>
              {isCount && <th>{reverse ? data.length - idx : idx + 1}</th>}
              {Object.values(el).map((val, idx) => (
                <td key={idx}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function TableX({ data, title, className, reverse = false }) {
  data = reverse ? [...data].reverse() : [...data];
  //키값만 배열로 추출
  const keys = Object.keys(data[0]);
  const values = Object.values(data[0]);
  console.log("keys", keys);
  console.log("values", values);

  return (
    <>
      {title && (
        <Text tagName={"h1"} styleType={"title1"}>
          {title}
        </Text>
      )}

      <table border="2">
        <tbody>
          {data.map((_, idx) => (
            // tr 반복
            <tr key={idx}>
              <th scope="row">{keys[idx]}</th>
              {keys.map((_, idx2) => (
                //td반복
                //0: data[0][keys[0]], data[0][keys[1]], data[0][keys[2]]
                //1: data[1][keys[0]], data[1][keys[1]], data1][keys[2]]
                //2: data[2][keys[0]], data[2][keys[1]], data[2][keys[2]]
                <td key={idx2}>{data[idx2][keys[idx]]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
