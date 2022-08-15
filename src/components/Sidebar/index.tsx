import {
  SidebarContainer,
  SidebarContent,
  SidebarDivider,
  SidebarHeader,
  SidebarItem,
  SidebarItemActiveBorder,
  SidebarItemIcon,
  SidebarItemTitle,
} from "./styles";
import paymeLogo from "../../assets/images/payme-logo.svg";
import { DashboardIcon } from "../Icons/DashboardIcon";
import { MoneyCheckDollarIcon } from "../Icons/MoneyCheckDollarIcon";
import { PeopleGroupIcon } from "../Icons/PeopleGroupIcon";
import { SettingFilledIcon } from "../Icons/SettingFilledIcon";
import { useState } from "react";
import { LogoutIcon } from "../Icons/LogoutIcon";
import { useLocation } from "react-router-dom";

const routes = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Grupos",
    icon: <PeopleGroupIcon />,
    path: "/grupos",
  },
  {
    id: 3,
    title: "Despesas",
    icon: <MoneyCheckDollarIcon />,
    path: "/despesas",
  },
  {
    id: 4,
    title: "Configurações",
    icon: <SettingFilledIcon />,
    path: "/configuracoes",
  },
  {
    id: 5,
    title: "Logout",
    icon: <LogoutIcon />,
    path: "/logout",
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <img src={paymeLogo} alt="" />
      </SidebarHeader>
      <SidebarContent>
        {routes.map((route) => (
          <SidebarItem
            key={route.id}
            to={route.path}
            onClick={() => setActiveLink(route.path)}
          >
            <SidebarItemIcon activeLink={pathname === route.path}>
              {activeLink === route.path ? <SidebarItemActiveBorder /> : null}
              {route.icon}
            </SidebarItemIcon>
            <SidebarItemTitle>{route.title}</SidebarItemTitle>
          </SidebarItem>
        ))}
      </SidebarContent>
    </SidebarContainer>
  );
}
