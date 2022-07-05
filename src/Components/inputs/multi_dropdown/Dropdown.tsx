import MenuItems from "./MenuItems";

const Dropdown = (props:any ) => {
    
    const depthLevel = props.depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
      <ul className={`dropdown ${dropdownClass} ${props.dropdown ? "show" : ""}`}>
        {props.submenus.map((submenu: any, index: any) => (
          <MenuItems getCategory={props.getCategory} mouse={props.mouse}  items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    );
  };

export default Dropdown;