import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { LayoutContainer, LayoutContent } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  );
}
