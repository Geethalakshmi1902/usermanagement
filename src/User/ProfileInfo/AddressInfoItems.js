import React from "react";
import AddressInfo from "./AddressInfo";

export default function AddressInfoItems(props) {
  const { className, user, profile } = props;
  return (
    <>
      {user?.address_data?.length !== 0 ? (
        <>
          {user?.address_data?.map((elm, i) => (
            <>
              <AddressInfo data={elm} />
            </>
          ))}
        </>
      ) : (
        <AddressInfo data={user.address_data} />
      )}
    </>
  );
}
