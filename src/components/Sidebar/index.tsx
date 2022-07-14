import { ReactElement } from "react";
import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export const Sidebar = (): ReactElement => {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=600"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img src="https://github.com/amanda-santos.png" alt="Amanda Santos" />

        <strong>Amanda Santos</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  );
};
