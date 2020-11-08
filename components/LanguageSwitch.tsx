// import { FormattedMessage } from "react-intl";
import Link from "next/link";

import { useLocalization } from "../hooks/useLocalization";

export const LanguageSwitch: React.FC = () => {
  const {
    switchToEnglish,
    switchToPortuguese,
    switchToDutch,
  } = useLocalization();

  return (
    <ul>
      <li>
        <Link href="/blog">
          <a onClick={switchToEnglish}>EN</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a onClick={switchToPortuguese}>PT</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a onClick={switchToDutch}>NL</a>
        </Link>
      </li>
    </ul>
  );
};
