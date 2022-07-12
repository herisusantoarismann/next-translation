import React, { useTransition } from "react";
import { TiArrowRepeat } from "react-icons/ti";
import styles from "../../styles/content.module.css";
import { langs } from "../../utils/language";
import Select from "./Select";

const Content = () => {
  const [isPending, startTransition] = useTransition();
  const [selectedFrom, setSelectedFrom] = React.useState<string>("id");
  const [selectedTo, setSelectedTo] = React.useState<string>("en");
  const [text, setText] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");

  const sendData = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", text);
    encodedParams.append("target", selectedTo);
    encodedParams.append("source", selectedFrom);

    fetch(process.env.API_URL!, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": process.env.API_KEY!,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          alert("Sorry, the translation quota exceeds the limit");
          return;
        }
        setResult(res.data.translations[0].translatedText);
      })
      .catch((err) => console.log(err));
  };

  const onSwitchLanguage = () => {
    const temp = selectedFrom;
    setSelectedFrom(selectedTo);
    setSelectedTo(temp);
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "from") {
      setSelectedFrom(e.target.value);
      return;
    }

    setSelectedTo(e.target.value);
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  React.useEffect(() => {
    if (selectedFrom.length > 0 && selectedTo.length > 0 && text.length > 0)
      sendData();
  }, [selectedFrom, selectedTo, text]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.language}>
          <Select
            data={langs}
            name="from"
            value={selectedFrom}
            onChange={onChangeSelect}
          />
          <TiArrowRepeat
            className={styles.switch}
            onClick={() => onSwitchLanguage()}
          />
          <Select
            data={langs}
            name="to"
            value={selectedTo}
            onChange={onChangeSelect}
          />
        </div>
        <div className={styles.translation}>
          <div className={styles.plain}>
            <textarea
              className={styles.input}
              onChange={(e) => onChangeTextarea(e)}
            ></textarea>
          </div>
          <div className={styles.result}>
            <p className={styles.resultText}>
              {isPending ? "Translating..." : result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// never tried it with server side because it ran out of quota :(

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.API_URL!}/language`, {
//     method: "GET",
//     headers: {
//       "Accept-Encoding": "application/gzip",
//       "X-RapidAPI-Key": process.env.API_KEY!,
//       "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
//     },
//   });
//   const language = await res.json();

//   return { props: { language } };
// }

export default Content;
