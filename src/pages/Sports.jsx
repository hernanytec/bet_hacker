import React, { useState } from 'react';

import { DashboardLayout } from '../components/Layout';
import NavExpanded from '../components/navExpanded';
import CheckBox from '../components/checkbox';
import Switcher from '../components/switcher';

const SportsPage = () => {

  const filters = [
    {
      code: 'BASEBALL',
      label: 'Baseball',
    },
    {
      code: 'BASKET',
      label: 'Basket',
    },
    {
      code: 'CRICKET',
      label: 'Cricket',
    },
    {
      code: 'E_SPORTS',
      label: 'E-Sports',
    },
    {
      code: 'FUTEBOL',
      label: 'Futebol',
    },
    {
      code: 'HANDBALL',
      label: 'Handball',
    },
    {
      code: 'HOCKEI',
      label: 'Hockei',
    },
    {
      code: 'MMA',
      label: 'MMA',
    },
    {
      code: 'RUGBY',
      label: 'Rugby',
    },
    {
      code: 'RUGBY_LEAGUE',
      label: 'Rugby Leage',
    },
    {
      code: 'TENIS',
      label: 'Tenis',
    },
    {
      code: 'TENIS_MESA',
      label: 'Tenis Mesa',
    },
    {
      code: 'VOLEI',
      label: 'Volei',
    }
  ]

  const [filtersSelected, setfiltersSelected] = useState([])

  const handleCheck = (option, value) => {
    if (value) {
      setfiltersSelected([...filtersSelected, option])
    } else {
      setfiltersSelected(filtersSelected.filter(s => s.code !== option.code))
    }
  }

  const toggleSelectAll = (value) => {
    if (value) {
      setfiltersSelected(filters)
    } else {
      setfiltersSelected([])
    }
  }

  const contains = (filter) => {
    return filtersSelected.find(selected => selected.code === filter.code) || false
  }

  return (
    <DashboardLayout filters={filtersSelected}>
      <NavExpanded>
        <span className="subtitle">Sports</span>
        <Switcher label="Check all" onChange={value => toggleSelectAll(value)} />
        {
          filters.map((filter, index) => <CheckBox key={index} value={contains(filter)} label={filter.label} onChange={value => handleCheck(filter, value)} />)
        }
      </NavExpanded>
    </DashboardLayout>
  )
}

export default SportsPage;