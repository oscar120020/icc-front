import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

export const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton className="simple-button" />
      <GridToolbarFilterButton className="simple-button" />
      <GridToolbarDensitySelector className="simple-button" />
    </GridToolbarContainer>
  );
};
