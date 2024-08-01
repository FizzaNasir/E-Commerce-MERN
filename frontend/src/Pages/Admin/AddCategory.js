import * as React from 'react';
import Typography from '@mui/material/Typography';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import Box from '@mui/material/Box';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Button } from '@mui/base/Button';
import { AccordionSummary } from './Styles/AdminCategoryStyle';
import { AccordionDetails } from './Styles/AdminCategoryStyle';
import { Accordion } from './Styles/AdminCategoryStyle';
import { CategoryListContainer } from './Styles/AdminCategoryStyle';
import { categoriesApi } from '../../Utils/Api-call';

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await categoriesApi();
        setCategories(data);
        console.log("categories_11111", data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={CategoryListContainer}>
      {
        categories.map((item, index)=>
          //  <div>
           <Box sx={{ width: 500 }}>
            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary aria-controls="panel1d-content" id={`panel1d-header${index}`}>
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Box sx={{ minHeight: 352, minWidth: 250 }}>
                {
                  item.subcategories?.map(subItem=> (
                    <div>
                    <SimpleTreeView>
                      <TreeItem itemId={`${subItem.name}${index}`} label={subItem.name}>
                        {
                          subItem.subcategories?.map((subsubItem, index)=>
                            <TreeItem itemId={`${subsubItem.name}${index}`} label = {subsubItem.name} />
                          )
                        }
                          <Button variant="contained" color="primary" sx={{marginLeft: 20}}> Add </Button>
                       </TreeItem>
                    </SimpleTreeView>
                  </div>
                  ))
                }
                <Button variant="contained" color="primary" sx={{marginLeft: 20}}> Add </Button>
            </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          // </div>

        )
     }
    </div>
  );
}