/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";
import { useLocalization } from "../hooks/useLocalization";

export const LanguageSwitch: React.FC = () => {
  const {
    switchToEnglish,
    switchToPortuguese,
    switchToDutch,
  } = useLocalization();

  return (
    <ul
      sx={{
        listStyle: "none",
        display: "inline-flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <li
        sx={{
          margin: "0 10px",
        }}
      >
        <Link href="/blog">
          <a onClick={switchToEnglish}>EN</a>
        </Link>
      </li>
      <li
        sx={{
          margin: "0 10px",
        }}
      >
        <Link href="/blog">
          <a onClick={switchToPortuguese}>PT</a>
        </Link>
      </li>
      <li
        sx={{
          margin: "0 10px",
        }}
      >
        <Link href="/blog">
          <a onClick={switchToDutch}>NL</a>
        </Link>
      </li>
    </ul>
  );
};
