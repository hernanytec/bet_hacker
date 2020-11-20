import React from 'react';

import { DashboardLayout } from '../components/Layout';
import NavExpanded from '../components/navExpanded';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const ProjectsPage = () => {

  const GreenRadio = withStyles({
    root: {
      '&$checked': {
        color: '#04D361',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


  return (
    <DashboardLayout>
      <NavExpanded>
        <div className="projects">
          <RadioGroup className="sort" aria-label="sort-by" name="sort-by">
            <span className="projects-title">Sorted by</span>
            <FormControlLabel value="percent" control={<GreenRadio />} label="percent" />
            <FormControlLabel value="age" control={<GreenRadio />} label="age" />
            <FormControlLabel value="beginning-time" control={<GreenRadio />} label="beginning time" />
          </RadioGroup>

          <RadioGroup aria-label="order" name="order">
            <span className="projects-title order">Order</span>
            <FormControlLabel value="asc" control={<GreenRadio />} label="descending" />
            <FormControlLabel value="desc" control={<GreenRadio />} label="crescent" />
          </RadioGroup>
        </div>
      </NavExpanded>
    </DashboardLayout>
  )
}

export default ProjectsPage;