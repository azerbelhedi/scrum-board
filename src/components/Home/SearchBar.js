import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = props => {
  // let [searchString, setSearchString] = React.useState("");

  const handleStringSearchChange = e => {
    props.setSearchString(e.target.value);
  };

  return (
    <TextField
      id="filled-full-width"
      label="Projects"
      style={{ width: "70%", margin: 30 }}
      placeholder="Search Or Create"
      fullWidth
      margin="normal"
      variant="filled"
      InputLabelProps={{
        shrink: true
      }}
      value={props.searchString}
      onChange={e => {
        handleStringSearchChange(e);
      }}
    />
  );
};

export default SearchBar;
