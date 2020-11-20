import React from 'react';

import { DashboardLayout } from '../components/Layout';
import NavExpanded from '../components/navExpanded';

const ZoomPage = () => {
  return (
    <DashboardLayout>
      <NavExpanded>
        <div className="zoom">
          <span className="zoom-title">Zoom</span>

          <div className="container">
            <button className="sub-button">
              <span>-</span>
            </button>
            <span>100%</span>
            <button className="add-button">
              <span>+</span>
            </button>
          </div>
        </div>
      </NavExpanded>
    </DashboardLayout>
  )
}

export default ZoomPage;