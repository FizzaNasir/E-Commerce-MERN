export const CategoryStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "1px solid red",
    '& .MuiTypography-root:hover, &:hover': {
        color: "rgb(245, 86, 32)",
        backgroundColor: "rgb(245,245,245)",
        cursor: "pointer",
    },

    '&:hover .icon' : {
        display: 'block'
    },
}

export const parentCategoryCard = {
    display: 'flex',
    marginTop: 2, 
    marginLeft: 15 , 
    position: 'relative'
}

export const parentSubCategoryCard = {
    marginTop: 0,
    marginLeft: 1,
    position: 'absolute', 
    top: 0, 
    left: '100%', 
    zIndex: 10,
}

export const card = {
    minWidth: 250, 
    width: 250,
    borderRadius: 10,
    height: 320,
    // border: "1px solid green",
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
    marginLeft: 3,
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

export const SubCategoryStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "1px solid red",
    width: 200,
    '& .MuiTypography-root:hover, &:hover': {
        color: "rgb(245, 86, 32)",
        backgroundColor: "rgb(245,245,245)",
        cursor: "pointer",
    },

    '&:hover .icon' : {
        display: 'block'
    },
}
