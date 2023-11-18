import cn from "classnames";

import "./styles.css";

const MobileBtn = ({ onClick, isActive }) => {
  return (
    <button
      className={cn("mobile-btn", { "mobile-btn--active": isActive })}
      type="button"
      onClick={onClick}
    >
      <span className="mobile-btn__line"></span>
      <span className="mobile-btn__line"></span>
      <span className="mobile-btn__line"></span>
    </button>
  );
};

export default MobileBtn;
