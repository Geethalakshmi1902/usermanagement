import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";
import React from "react";
import { FormControl, InputLabel } from "@mui/material";
import { SelectField } from "../select/SelectField";

const MultiDropdown = (props: any) => {
  const [mousePoint, setMousePoint] = React.useState(false);
  const { getCategory } = props;
  const onMouseEnter = () => {
    setMousePoint(true);
  };
  const [subctgryid, setSubctgryid] = React.useState("");

  const onMouseLeave = () => {
    setMousePoint(false);
  };

  return (
    <div>
      <ul className="menus">
        {[
          {
            name: props.selectedCategoryName?.name
              ? props.selectedCategoryName.name
              : "Category List",
            children: props.data,
          },
        ].map((menu: any, index: any) => {
          const depthLevel = 0;
          return (
            <MenuItems
              getCategory={(id: String, name: string) => {
                getCategory(id, name);
              }}
              items={menu}
              mouse={mousePoint}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MultiDropdown;
function id(id: any) {
  throw new Error("Function not implemented.");
}
