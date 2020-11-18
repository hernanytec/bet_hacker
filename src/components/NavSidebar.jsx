import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { DiAptana } from "react-icons/di";
import { FaSearchPlus } from "react-icons/fa";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { AiOutlinePercentage, AiOutlineUnorderedList } from "react-icons/ai";
import { BiBasketball } from "react-icons/bi";
import BetHackerIcon from '../BetHackerIcon.jpeg'

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();

  const pageSelected = location.pathname

  const items = [
    {
      render: () => <FaSearchPlus />,
      id: "/zoom",
    },
    {
      render: () => <HiOutlineSwitchVertical />,
      id: "/projects",
    },
    {
      render: () => <AiOutlineUnorderedList />,
      id: "/bookmakers",
    },
    {
      render: () => <AiOutlinePercentage />,
      id: "/percent",
    },
    {
      render: () => <BiBasketball />,
      id: "/sports",
    },
  ]

  const changeSelected = (pageId) => {
    history.push(pageId)
  }

  const getClasses = (pageId) =>{
    if(pageSelected === pageId){
      return 'nav-sidebar__item--selected'
    }
  }

  return (
    <div className="nav-sidbar">
      <div className="nav-header">
        <img src={BetHackerIcon} alt="bet hacker icon" />
      </div>

      <div className="nav-filters">

        {
          items.map((item, index) => (
            <div key={index} onClick={() => changeSelected(item.id)} className={`nav-sidebar__item ${getClasses(item.id)}`}>
              { item.render()}
            </div>
          ))
        }
      </div>

      <div onClick={() => history.push('/setings')} className="nav-config">
        <div className={`nav-sidebar__item ${getClasses('/setings')}`}>
          <DiAptana />
        </div>
      </div>
    </div>
  );
};
