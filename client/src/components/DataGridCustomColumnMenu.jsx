import {
    GridColumnMenu,
    GridColumnMenuFilterItem,
    GridColumnMenuHideItem
} from "@mui/x-data-grid";
  
  const CustomColumnMenu = (props) => {    
    return (
      <GridColumnMenu
        {...props}
        slots={{
            // Override `columnMenuFilterItem` component
            // columnMenuColumnsItem: null,
            GridColumnUnsortedIcon: null
        }}
      />
    );
  };
  
  export default CustomColumnMenu;