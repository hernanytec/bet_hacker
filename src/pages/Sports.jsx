import React from 'react';

import {DashboardLayout} from '../components/Layout';
import NavExpanded from '../components/navExpanded';
import CheckBox from '../components/checkbox';
import Switcher from '../components/switcher';
import Grid from '../components/grid';

const SportsPage = () => {

  const filters = [
    {
      code: 'BASEBALL',
      label: 'Baseball'
    },
    {
      code: 'BASKET',
      label: 'Basket'
    },
    {
      code: 'CRICKET',
      label: 'Cricket'
    },
    {
      code: 'E_SPORTS',
      label: 'E-Sports'
    },
    {
      code: 'FUTEBOL',
      label: 'Futebol'
    },
    {
      code: 'HANDBALL',
      label: 'Handball'
    },
    {
      code: 'HOCKEI',
      label: 'Hockei'
    },
    {
      code: 'MMA',
      label: 'MMA'
    },
    {
      code: 'RUGBY',
      label: 'Rugby'
    },
    {
      code: 'RUGBY_LEAGUE',
      label: 'Rugby Leage'
    },
    {
      code: 'TENIS',
      label: 'Tenis'
    },
    {
      code: 'TENIS_MESA',
      label: 'Tenis MEsa'
    },
    {
      code: 'VOLEI',
      label: 'Volei'
    }
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-row">
        <NavExpanded>
          <span className="subtitle">Sports</span>
            <Switcher label="Check all" onChange={checked => console.log(checked)} />
            {
              filters.map((filter, index) => <CheckBox key={index} label={filter.label} onChange={checked => console.log(checked)} />)
            }
        </NavExpanded>
        <Grid />
      </div>
    </DashboardLayout>
  )
}

export default SportsPage;