import Category from "./Categories"
import NavBar from "./NavBar"
import { categories } from "../../jsonCategories"

const categoriesData = categories[0]
const HomePage = ()  => {
  return (
    <>
      <NavBar/>
      <Category data={categoriesData}/>
    </>
  )
}
export default HomePage