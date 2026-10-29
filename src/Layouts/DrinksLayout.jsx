
import { Outlet } from "react-router";
import DrinksAside from "../Components/DrinkAside";

export default function DrinksLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" flex shrink">
        <DrinksAside/>
      </div>

      <main className=" bg-gray-50  flex-1 pl-3 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
