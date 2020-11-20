import React from "react";

import { DashboardLayout } from "../components/Layout";
import NavExpanded from '../components/navExpanded';
import Switcher from '../components/switcher';

const BookmakersPage = () => {
  return (
    <DashboardLayout>
     <NavExpanded>
        <span className="subtitle">Bookmakers</span>
        <Switcher label="Check all" onChange={value => console.log(value)} />

      </NavExpanded>
    </DashboardLayout>
  )
};

export default BookmakersPage;
