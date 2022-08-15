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

export function Sidebar() {
  const [activeLink, setActiveLink] = useState(true);
  const { pathname } = useLocation();

  return (
    <SidebarContainer>
      <SidebarHeader>
        <img src={paymeLogo} alt="" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem to="/dashboard">
          <SidebarItemIcon activeLink={pathname === "/dashboard"}>
            {activeLink && <SidebarItemActiveBorder />}
            <DashboardIcon color={activeLink ? "#1D2A30" : ""} />
          </SidebarItemIcon>
          <SidebarItemTitle>Dashboard</SidebarItemTitle>
        </SidebarItem>
        <SidebarItem to="/groups">
          <SidebarItemIcon activeLink={pathname === "/groups"}>
            <PeopleGroupIcon />
          </SidebarItemIcon>
          <SidebarItemTitle>Grupos</SidebarItemTitle>
        </SidebarItem>
        <SidebarItem to="/expenses">
          <SidebarItemIcon activeLink={pathname === "/expenses"}>
            <MoneyCheckDollarIcon />
          </SidebarItemIcon>
          <SidebarItemTitle>Despesas</SidebarItemTitle>
        </SidebarItem>
        <SidebarItem to="/setting">
          <SidebarItemIcon activeLink={pathname === "/setting"}>
            <SettingFilledIcon />
          </SidebarItemIcon>
          <SidebarItemTitle>Configurações</SidebarItemTitle>
        </SidebarItem>
        <SidebarDivider />
        <SidebarItem to="/logout">
          <SidebarItemIcon activeLink={pathname === "/logout"}>
            <LogoutIcon />
          </SidebarItemIcon>
          <SidebarItemTitle>Sair</SidebarItemTitle>
        </SidebarItem>
      </SidebarContent>
    </SidebarContainer>
  );
}
