import Category from "./Categories"
import NavBar from "./NavBar"
import { categories } from "../../jsonCategories"
import { CarouselComponent } from "./Carousel"
import { Box } from "@mui/material"

const categoriesData = categories[0]

const staticImages = [
  "https://icms-image.slatic.net/images/ims-web/bf78f779-090d-458c-bcd7-8db510217bc5.png",
  "https://icms-image.slatic.net/images/ims-web/2a43656a-5aff-46c9-a0c9-29cbf5825b5a.jpg",
  "https://icms-image.slatic.net/images/ims-web/485dd70f-67be-441b-82a5-470c50b2d260.jpg_1200x1200.jpg"
]

const HomePage = ()  => {
  return (
    <>
      <NavBar/>
      <Box sx={{display: "flex"}} >
        <Category data={categoriesData}/>
        <CarouselComponent items={staticImages}/>
      </Box>
    </>
  )
}
export default HomePage