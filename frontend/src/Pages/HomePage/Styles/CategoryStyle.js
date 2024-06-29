export const CategoryStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    '& .MuiTypography-root:hover, &:hover': {
        color: "rgb(245, 86, 32)",
        backgroundColor: "rgb(245,245,245)",
        cursor: "pointer"
    },

    '&:hover .icon' : {
        display: 'block'
    },
}

export const parentCategoryCard = {
    display: 'flex',
    marginTop: 2, 
    marginLeft: 15 , 
}
export const parentSubCategoryCard = {
     marginTop: 0,
     marginLeft: 2,
}

export const card = {
    minWidth: 250, 
    width: 250,
    borderRadius: 3,
}


export const extendableWidth = {
    width: 800,
}

export const flexContainer = {
    display: "flex",
}

export const verticalLine = {
    borderLeft: "1px solid rgb(229, 229, 229)",
    height: "auto", 
    marginLeft: 5,
    marginTop: 1, 
    marginBottom: 1
}

export const categoryImage = {
    height: 48,
    width: 48,
    backgroundColor: "#bbb",
    borderRadius: 50,
    display: "inlineBlock",
    border: "1px solid rgba(60, 56, 56, .03)",
    background: "rgba(0, 0, 0, .03)"
}