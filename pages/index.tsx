import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <>
      <Head>
        <title>L.K.J</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[L.K.J Self Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={styles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
