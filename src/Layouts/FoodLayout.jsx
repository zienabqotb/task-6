import { Outlet } from "react-router";
import FoodAside from "../Components/FoodAside";

export default function FoodLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" flex shrink">
        <FoodAside />
      </div>

      <main className=" bg-gray-50  flex-1 pl-3 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
