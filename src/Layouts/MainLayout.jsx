import { Outlet } from "react-router";
import Nav from "../Components/Nav";

export default function MainLayout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  );
}
