import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {
  CategoryStyle,
  card,
  parentSubCategoryCard,
  flexContainer,
  verticalLine,
  categoryImage,
  SubCategoryStyle
} from './Styles/CategoryStyle';

const SubCategory = ({ Subcategories }) => {
  const [ishovered, setIsHovered] = useState(false);
  const [subcategories, setsubcategories] = useState([]);

  
  
  const handleMouseEnter = (item) => {
    console.log("subsubcategoriesfrom parent", item)
    let subcategories = [];
    for(let i = 0; i< item.length; i++){
        subcategories.push(item)
    }
    console.log("subsubcategories", subcategories)
    setsubcategories(subcategories)
    setIsHovered(true)
}
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box sx={parentSubCategoryCard} onMouseLeave={handleMouseLeave}>
      <Card style={!ishovered ? card : {...card, width: 950}} sx={flexContainer}>
        <CardContent>
            {Subcategories.map((item, index) => (
                <Box sx={SubCategoryStyle} key={index} onMouseEnter={()=>handleMouseEnter(item[index].subsubcategories)}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            {item[index].name}
                    </Typography>
                    <Box className="icon" sx={{ display: 'none' }}>
                        <ChevronRightIcon />
                    </Box>                     
                </Box>
            ))}
        </CardContent>

        {ishovered && (
          <>
            <Box sx={verticalLine}></Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
              {subcategories.map((subItem, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'calc(33.33% - 16px)',
                    margin: '8px',
                  }}
                >
                  <img
                    srcSet={`${subItem[index].img}?w=20&fit=crop&auto=format&dpr=2 2x`}
                    src={`${subItem[index].img}?w=20&fit=crop&auto=format`}
                    loading="lazy"
                    style={categoryImage}
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {subItem[index].name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Card>
    </Box>
  );
};

export default SubCategory;
