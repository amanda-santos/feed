import { ReactElement } from "react";

import { Header, Post, Sidebar } from "./components";

import { posts } from "./data";
import { Post as PostType } from "./types";

import "./global.css";
import styles from "./App.module.css";

export const App = (): ReactElement => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }: PostType) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
};
