import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState(null);

  useEffect(
    () => async () => {
      try {
        const news = await getNews();
        setNews(news);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <main className={styles.main}>
      {news ? (
        <>
          <NewsBanner item={news[0]} />
          <NewsList news={news} />
        </>
      ) : null}
    </main>
  );
};

export default Main;
