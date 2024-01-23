import clsx from "clsx";
import styles from "./table.module.scss";
import Text from "../text/Text";
/*
  thead
    (No, name, age, address)
  tbody
    tr(반복) > td(no), td(name), td(age), td(address)
*/

export default function Table({ data, title, className }) {
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
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el, idx) => (
            <tr key={idx}>
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
