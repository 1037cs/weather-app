import { FC } from "react";
import styles from "./Input.module.scss";

interface IInput {
  value: string;
  onChange: (e: string) => void;
  loader?: JSX.Element;
  isLoading?: boolean;
}

export const Input: FC<IInput> = ({ value, onChange, loader, isLoading }) => {
  return (
    <div className={styles.inputWrapper}>
      {isLoading && <div className={styles.loader}>{loader}</div>}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};
