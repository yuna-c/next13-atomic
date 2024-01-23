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
            {isCount && <th scope="column">No</th>}
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
  const keys = Object.keys(data[0]);
  console.log(keys);

  return (
    <>
      {title && (
        <Text tagName={"h1"} styleType={"title1"}>
          {title}
        </Text>
      )}

      <table border="1">
        <tbody>
          {data.map((el, idx) => (
            <tr key={idx}>
              <th>{keys[idx]}</th>
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
