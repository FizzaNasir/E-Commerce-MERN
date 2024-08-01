import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { CategoryStyle, card, parentCategoryCard } from './Styles/CategoryStyle';
import SubCategory from './SubCategories';
import { categories } from '../../jsonCategories';

const Category = ({data}) => {   
    
const [subcategories, setsubcategories] = React.useState([])
const [ishovered, setIsHovered] = React.useState(false)
    
const handleMouseEnter = (item) => {
    let subcategories = [];
    for(let i = 0; i< item.length; i++){
        subcategories.push(item)
    }
    setsubcategories(subcategories)
    setIsHovered(true)
}

const handleMouseLeave = () => {
    setIsHovered(false)
}

return (
    <Box sx={parentCategoryCard} onMouseLeave={handleMouseLeave}>
        <Card style={card}>
            <CardContent>   
            {
                data.map((item, index)=> (
                    <Box sx={CategoryStyle} onMouseEnter={()=>handleMouseEnter(item.subcategories)}>   
                            <Typography sx={{ fontSize: 14 }} key={index} color="text.secondary" gutterBottom>
                                { item.name }
                            </Typography>
                            <Box className="icon" sx={{display: 'none'}}><ChevronRightIcon/></Box>   
                    </Box>
                ))      
            }
            </CardContent>
        </Card>
        { ishovered &&
            <Box >
                 <SubCategory Subcategories={subcategories}/>
            </Box>
        }
   </Box>

)
}
export default Category