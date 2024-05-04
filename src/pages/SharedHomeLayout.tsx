import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";

const category = ["Womens", "Mens", "Electronics"];


function SharedHomeLayout() {
  return (
   <div>
   <header className="flex justify-center items-center gap-6 bg-gray-200 py-4">
      {category.map((item) => (
         <Link  to={`/${item}`} className="font-semibold">{item}</Link>
      ))}
   </header>
   <Outlet />
</div>
  )
}
export default SharedHomeLayout