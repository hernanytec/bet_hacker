import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import BetHackerIcon from '../assets/BetHackerLogo.png'
import { ReactComponent as Zoom } from '../assets/zoom-in.svg';
import { ReactComponent as Percentage } from '../assets/percentage.svg';
import { ReactComponent as Bookmarks } from '../assets/sport-list.svg';
import { ReactComponent as List } from '../assets/list.svg';
import { ReactComponent as Arrows } from '../assets/arrows-sort.svg';
import { ReactComponent as Sports } from '../assets/ball-basketball.svg';
import { ReactComponent as Settings } from '../assets/settings.svg';


export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();

  const pageSelected = location.pathname

  const items = [
    {
      render: () => <Zoom className="svg" />,
      id: "/zoom",
    },
    {
      render: () => <Arrows className="svg" />,
      id: "/projects",
    },
    {
      render: () => <List className="svg" />,
      id: "/list",
    },
    {
      render: () => <Percentage className="svg" />,
      id: "/percent",
    },
    {
      render: () => <Bookmarks className="svg" />,
      id: "/bookmarks",
    },
    {
      render: () => <Sports className="svg" />,
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
    return ''
  }

  return (
    <div className="nav-sidbar">
      <div className="nav-header">
        <img src={BetHackerIcon} alt="bet hacker icon" onClick={() => history.push('/')}/>
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

      <div onClick={() => history.push('/settings')} className="nav-config">
        <div className={`nav-sidebar__item ${getClasses('/setings')}`}>
          <Settings className="svg" />
        </div>
      </div>
    </div>
  );
};
