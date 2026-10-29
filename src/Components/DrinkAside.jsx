import { Coffee, CupSoda, GlassWater } from "lucide-react";
import { NavLink } from "react-router";

export default function DrinksAside() {
  return (
        <aside className="md:w-64 w-52 h-screen bg-amber-950 text-amber-100 flex flex-col p-5 sticky top-0 shadow-xl">
      <div className="flex items-center gap-3 px-3 py-4 mb-8 border-b border-amber-800/50">
        <span className="text-xl font-bold  text-amber-100">
          The options
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <NavLink
          to="/drinks"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-amber-200/80 hover:bg-amber-900/60 hover:text-white"
        >
          <Coffee className="w-5 h-5" />
          <span>Coffee</span>
        </NavLink>

        <NavLink
          to="freshjuice"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-amber-200/80 hover:bg-amber-900/60 hover:text-white"
        >
          <CupSoda className="w-5 h-5" />
          <span>Fresh-Juice</span>
        </NavLink>

        <NavLink
          to="water"
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-amber-200/80 hover:bg-amber-900/60 hover:text-white"
        >
          < GlassWater className="w-5 h-5"/>
          <span>Water</span>
        </NavLink>
      </div>
    </aside>
    
  )
}
