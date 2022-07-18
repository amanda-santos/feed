import { ReactElement } from "react";

import { Header, Post, Sidebar } from "./components";
import { posts } from "./data";

import "./global.css";
import styles from "./App.module.css";

export const App = (): ReactElement => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
};
