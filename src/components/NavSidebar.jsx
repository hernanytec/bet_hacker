import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />


<div
        className={`fixed inset-y-0 left-0 z-30 w-30 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-black border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
       
        
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
            },
            {
              title: "Zoom",
              itemId: "/zoom",
            },
            {
              title: "Projects",
              itemId: "/projects",
            },
            {
              title: "Bookmakers",
              itemId: "/bookmakers",
            },
            {
              title: "Sports",
              itemId: "/sports",
            }
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Setings",
                itemId: "/Setings",
              }
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
