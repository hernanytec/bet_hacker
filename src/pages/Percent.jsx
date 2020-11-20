import React from 'react';

import { DashboardLayout } from '../components/Layout';
import NavExpanded from '../components/navExpanded';

const PercentPage = () => {
  return (
    <DashboardLayout>
      <NavExpanded>
      <div className="percent">
        <span className="percent-title">Arb's percent</span>

        <div className="inputs">
            <input className="input-min" placeholder="Min."/>
            <hr/>
            <input className="input-max" placeholder="Max."/>
        </div>
      </div>
      </NavExpanded>
    </DashboardLayout>
  )
}

export default PercentPage;