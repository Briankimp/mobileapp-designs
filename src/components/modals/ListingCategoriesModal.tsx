import BaseModal from "./BaseModal";
import { useState } from "react";
import Shower from "@/assets/icons/ShowerIcon";
import OneBedroom from "@/assets/icons/OneBedroom";
import { BedSingle } from "lucide-react";
import TwoBedroom from "@/assets/icons/TwoBedroom";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const ListingCategoriesModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [categories, setCategories] = useState([
    {
      name: "Single Room",
      icon: [BedSingle],
      checked: false,
    },
    {
      name: "Bedsitter",
      icon: [BedSingle, Shower],
      checked: false,
    },
    {
      name: "One Bedroom",
      icon: [OneBedroom],
      checked: false,
    },
    {
      name: "Two Bedroom",
      icon: [TwoBedroom],
      checked: false,
    },
    {
      name: "Three Bedroom",
      icon: [TwoBedroom],
      checked: false,
    },
  ]);

  const handleRadioChange = (index: number) => {
    const newCategories = [...categories];
    newCategories[index].checked = !newCategories[index].checked;
    setCategories(newCategories);
  };

  return (
    <BaseModal open={open} onClose={onClose} className="pt-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex items-center w-full border-b border-gray-200 py-2 px-5 justify-between gap-20"
        >
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-start gap-[2px] w-20">
              {category.icon.map((Icon, index) => (
                <Icon key={index} className="text-blue-100" />
              ))}
            </div>
            <p className="whitespace-nowrap text-black-100 text-base font-thin">
              {category.name}
            </p>
          </div>

          <FormControlLabel
            control={
              <Radio
                checked={category.checked}
                onClick={() => handleRadioChange(index)}
                sx={{
                  color: category.checked ? "#3B53AD" : "black",
                  borderWidth: "1px",
                  "&.Mui-checked": {
                    color: "#3B53AD",
                  },
                }}
              />
            }
            label=""
          />
        </div>
      ))}
    </BaseModal>
  );
};

export default ListingCategoriesModal;
