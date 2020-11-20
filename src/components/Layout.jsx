import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";

import Grid from '../components/grid';
import BetHeader from '../components/bet-header';

export const DashboardLayout = ({ children, filters, showGrid=true }) => {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-white">
        <NavSidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, backgroundColor: '#eee' }}
              >
                <div className="flex flex-row">
                  {children}
                  {
                    showGrid 
                    ? (
                      <div className="flex flex-col flex-1" style={{margin: '25px 32px'}}>
                      <BetHeader />
                      <Grid filters={filters} />
                      </div>
                    )
                    : null
                  }
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
