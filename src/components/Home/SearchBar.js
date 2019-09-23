import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = props => {
  return (
    <TextField
      id="filled-full-width"
      label="Projects"
      style={{ margin: "0px 0px" }}
      placeholder="Search Or Create"
      fullWidth
      margin="normal"
      variant="filled"
      InputLabelProps={{
        shrink: true
      }}
      value={props.searchString}
      onChange={e => {
        props.handleStringSearchChange(e);
      }}
    />
  );
};

export default SearchBar;
