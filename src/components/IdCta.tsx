import { useEffect, useState } from 'react';
import { getIdcta } from '../config/config';
import { doSomethingOutSideReact } from '../lib/outsideReact';
import styles from '../styles/Home.module.css'

const IdCta = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getUrl = async () => {
      const conf = await getIdcta();

      console.log("URL CLIENT-SIDE::: ", conf);

      return setUrl(conf.url);
    }

    getUrl();
  });

  doSomethingOutSideReact();

  return (
    <>
      <p className={styles.description}>
        IDCTA URL: <code className={styles.code}>{url}</code>
      </p>
    </>
  );
};

export default IdCta;