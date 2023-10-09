import React from "react";

interface DropdownItemProps {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSoundEffect: React.Dispatch<React.SetStateAction<string>>;
  dropdownOpen: boolean;
  sound: string;
}

const DropdownItem = (props: DropdownItemProps) => {
  const { setDropdownOpen, setSoundEffect, dropdownOpen, sound } = props;

  const handleClick = () => {
    setSoundEffect(sound);
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="metro-dropdown-item" onClick={handleClick}>
      {sound}
    </div>
  );
};

export default DropdownItem;
