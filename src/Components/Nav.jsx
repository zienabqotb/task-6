import { NavLink } from "react-router";
import { Link } from "react-router";

export default function Nav() {
  return (
   <nav className=" nav-bar flex  items-center justify-around  py-5 bg-amber-100 ">
    <h1 className=" text-amber-950 font-bold text-4xl" > <Link to={"/"} > Logo</Link> </h1>
    <ul className="flex gap-11">
      <li className="text-amber-950 font-bold text-2xl" >
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-amber-950 font-bold text-2xl" >
        <NavLink to={"/food"}>Food</NavLink>
      </li>
      <li className="text-amber-950 font-bold text-2xl" >
        <NavLink to={"/drinks"}>Drinks</NavLink>
      </li>
    </ul>
   </nav>
  )
}
