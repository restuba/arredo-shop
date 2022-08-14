import { React, Link, connect, useNavigate, useLocation } from "libraries";
import { logoBlack } from "assets";
import { profileSelector } from "modules";
import { showPopup } from "services/popup";
import { logout } from "services";
import { general } from "configs";
import { Wrapper } from "./style";
import { menus, menuType } from "./menus";

const Index = ({ onClick, isShow, profile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeMenu = (path) => {
    const condition = [
      path === general.home && location.pathname === general.home,
      path !== general.home && location.pathname.includes(path),
    ];
    return condition.includes(true) ? "active" : "";
  };

  const onLogout = () => {
    showPopup({
      title: "Logout",
      description: "Are you sure you want to logout now?",
      showSecondButton: true,
      buttonTitle: "Logout",
      onClickButton: logout,
      type: "logout",
    });
  };

  const filterMenu = menus({ profile, onLogout }).map((items) => {
    return items.filter((item) => {
      return item.show;
    });
  });

  return (
    <Wrapper isShow={isShow} onClick={onClick}>
      <div className="nav-close">&#x2715;</div>
      <div className="nav-brand">
        <Link to={general.home}>
          <img src={logoBlack} alt="logo-brand" />
        </Link>
      </div>
      <nav className="nav-links">
        {filterMenu.map((items, indexItems) => {
          return (
            <ul key={`menus-${indexItems + 1}`}>
              {items.map((item, indexItem) => {
                return (
                  <li
                    key={`menu-${indexItem + 1}`}
                    aria-hidden="true"
                    className={activeMenu(item.path)}
                    onClick={() => {
                      if (item.type === menuType.link) {
                        return navigate(item.path);
                      }
                      return item.onClick();
                    }}
                  >
                    {item.icon ? item.icon : <img src={item.img} alt="" />}
                    {item.label}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </nav>
    </Wrapper>
  );
};

const reduxState = (state) => ({
  profile: profileSelector(state),
});

export default connect(reduxState)(Index);
