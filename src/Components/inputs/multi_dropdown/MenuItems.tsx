import { useState, useEffect, useRef } from "react";
// import ProductFrom from "../../../pages/components/product/ProductForm";
import Dropdown from "./Dropdown";

const MenuItems = (props: any) => {
  const [dropdown, setDropdown] = useState(false);
  const [ctgryid, setCtgryid] = useState("");
  const { getCategory } = props;
  let ref = useRef(null);

  useEffect(() => {
    const handler = (event: Event) => {
      // if (dropdown && ref.current && !ref.current.contains(event.target)) {
      //   setDropdown(false);
      // }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.items?.children?.length > 0 ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {props.items.name}{" "}
            {props.depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span style={{float:"right"}} className="arrow" />
            )}
          </button>
          {/* <input /> */}
          <Dropdown
            getCategory={props.getCategory}
            depthLevel={props.depthLevel}
            submenus={props.items.children}
            dropdown={dropdown}
            // value={props.items.name}
          />
        </>
      ) : (
        <>
          <a
            onClick={() => {
              getCategory(props.items.id, props.items.name);
            }}
          >
            {props.items.name}
          </a>
          {/* <ProductFrom getCategory={ctgryid}/> */}
        </>
      )}
    </li>
  );
};

export default MenuItems;
