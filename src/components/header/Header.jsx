import MobileBtn from "../mobile-btn";
import "./styles.css";

const Header = ({onMobileBtnClick, isMenuOpen}) => {
  return (
    <header className="header">
      <MobileBtn isActive={isMenuOpen} onClick={onMobileBtnClick} />
    </header>
  );
};

export default Header;
