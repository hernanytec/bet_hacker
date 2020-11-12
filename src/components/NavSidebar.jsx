import { Navigation } from "react-minimal-side-navigation"; 
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { DiAptana } from "react-icons/di";
import { FaSearchPlus } from "react-icons/fa";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { AiOutlinePercentage, AiOutlineUnorderedList } from "react-icons/ai";
import { BiBasketball} from "react-icons/bi";
import BetHackerIcon from '../BetHackerIcon.jpeg'


import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  

  return (
    <React.Fragment>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-24 transition duration-300 ease-out transform translate-x-0 bg-black border-r-2 lg:translate-x-0 lg:static lg:inset-0 "
        }`}
      >
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              elemBefore: () => <img src={BetHackerIcon}/>,
              itemId: "/Opportunities",
            },
            {
              elemBefore: () => <FaSearchPlus style={{ fontSize: 25 }}/>,
              itemId: "/zoom",
            },
            {
              elemBefore: () => <HiOutlineSwitchVertical style={{ fontSize: 30 }} />,
              itemId: "/projects",
            },
            {
              elemBefore: () => <AiOutlineUnorderedList style={{ fontSize: 30 }}/>,
              itemId: "/bookmakers",
            },
            {
              elemBefore: () => <AiOutlinePercentage style={{ fontSize: 30 }}/>,
              itemId: "/percent",
            },
            {
              elemBefore: () => <BiBasketball style={{ fontSize: 30 }}/>,
              itemId: "/sports",
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                itemId: "/Setings",
                elemBefore: () => <DiAptana style={{ fontSize: 30 }}/>,
              },
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
