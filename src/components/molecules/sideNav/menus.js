import { noProfile } from "assets";
import { auth, cart, general, products } from "configs";
import {
  RiAppsLine as HomeIcon,
  RiShoppingCartLine as CartIcon,
  RiShoppingCartLine as ProductIcon,
  RiStore2Line as AboutIcon,
  RiHeartLine as FavIcon,
  RiSearchLine as SearchIcon,
  RiLoginBoxLine as LoginIcon,
  RiLogoutBoxLine as LogoutIcon,
} from "react-icons/ri";

export const menuType = {
  link: "link",
  button: "button",
};

export const menus = (props) => {
  const { profile, onLogout } = props;
  return [
    [
      {
        path: general.home,
        label: "Home",
        icon: <HomeIcon />,
        type: menuType.link,
        show: true,
      },
      {
        path: general.products,
        label: "Products",
        icon: <ProductIcon />,
        type: menuType.link,
        show: true,
      },
      {
        path: general.about,
        label: "About",
        icon: <AboutIcon />,
        type: menuType.link,
        show: true,
      },
    ],
    [
      {
        path: products.search.main,
        label: "Search",
        icon: <SearchIcon />,
        type: menuType.link,
        show: true,
      },
      {
        path: cart.main,
        label: "Cart",
        icon: <CartIcon />,
        type: menuType.link,
        show: true,
      },
      {
        path: general.favorite,
        label: "Favorite",
        icon: <FavIcon />,
        type: menuType.link,
        show: true,
      },
    ],
    [
      {
        path: "/profile",
        label: profile?.name || profile?.email?.split("@")?.[0] || "no name",
        img: profile?.photo || noProfile,
        type: menuType.link,
        show: profile,
      },
      {
        label: "Logout",
        icon: <LogoutIcon />,
        onClick: onLogout,
        type: menuType.button,
        show: profile,
      },
      {
        path: auth.login,
        label: "Login",
        icon: <LoginIcon />,
        type: menuType.link,
        show: !profile,
      },
    ],
  ];
};
