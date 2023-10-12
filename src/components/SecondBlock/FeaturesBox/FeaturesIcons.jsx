// data
import advantages from '../../../data/features.json'

// reactIcons
import { GoGear, GoChecklist } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

// emotion
import { svgIcon } from './FeaturesBox.styled';

export const FeaturesIcons = ({ id }) => {

  return (
    <>
      {advantages[id].id === 1 && <FaRegHandshake style={svgIcon} />}
      {advantages[id].id === 2 && <GoGear style={svgIcon} />}
      {advantages[id].id === 3 && <IoIosTimer style={svgIcon} />}
      {advantages[id].id === 4 && <GoChecklist style={svgIcon} />}
      {advantages[id].id === 5 && <MdOutlineDesignServices style={svgIcon} />}
      {advantages[id].id === 6 && <GiMagnifyingGlass style={svgIcon} />}
    </>
  )
}