import Home from "./Pages/Home";
import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import NotFound from "./Pages/NotFound";
import FoodLayout from "./Layouts/FoodLayout";
import Burger from "./Pages/Burger";
import Pizza from "./Pages/Pizza";
import Salad from "./Pages/Salad";
import DrinksLayout from "./Layouts/DrinksLayout";
import Coffe from "./Pages/Coffee";
import FreshJuice from "./Pages/FreshJuice";
import Water from "./Pages/Water";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="food" element={<FoodLayout/>}>
            <Route index element={<Burger/>}/>
            <Route path="pizza" element={<Pizza/>}/>
            <Route path="salad" element={<Salad/>}/>
          </Route>
          <Route path="drinks" element={<DrinksLayout/>}>
          < Route index element={<Coffe/>}/>
            <Route path="freshjuice" element={<FreshJuice/>}/>
            <Route path="water" element={<Water/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
