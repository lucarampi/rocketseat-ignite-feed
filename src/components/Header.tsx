// interface HeaderProps {}
import style from "./Header.module.scss";
import igniteLogo from "../assets/ignite-logo.svg";

export default function Header() {
  return (
    <div className={style.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </div>
  );
}
