import { Hamburger, Pizza, Salad } from "lucide-react";
import { NavLink } from "react-router";

export default function FoodAside() {
  return (
        <aside className="md:w-64 w-52 h-screen bg-amber-950 text-amber-100 flex flex-col p-5 sticky top-0 shadow-xl">
      <div className="flex items-center gap-3 px-3 py-4 mb-8 border-b border-amber-800/50">
        <span className="text-xl font-bold tracking-wide text-amber-100">
          The options
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <NavLink
          to="/food"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-amber-200/80 hover:bg-amber-900/60 hover:text-white"
        >
          <Hamburger className="w-5 h-5" />
          <span>Burger</span>
        </NavLink>

        <NavLink
          to="pizza"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-amber-200/80 hover:bg-amber-900/60 hover:text-white"
        >
          <Pizza className="w-5 h-5" />
          <span>Pizza</span>
        </NavLink>

        <NavLink
          to="salad"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-amber-200/80 hover:bg-amber-900/60 hover:text-white"
        >
          < Salad className="w-5 h-5"/>
          <span>salad</span>
        </NavLink>
      </div>
    </aside>
    
  )
}
