import { ReactElement } from "react";

import { Header, Post, Sidebar } from "./components";

import "./global.css";
import styles from "./App.module.css";

export const App = (): ReactElement => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Amanda Santos" content="content" />
        </main>
      </div>
    </div>
  );
};
