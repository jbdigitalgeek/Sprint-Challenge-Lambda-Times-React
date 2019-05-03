import React from 'react';
import PropTypes from 'prop-types';


const Tab = (props) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      return (
        <div
          className={props.selectedTab === props.tabData ? 'tab active-tab' : 'tab'}
          onClick={(event) => props.selectTabHandler(event, props.tabData)}
        >
          {props.tabData.toUpperCase()}
        </div>
      );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
	tabData: PropTypes.string.isRequired,
	selectTabHandler: PropTypes.func.isRequired,
	selectedTab: PropTypes.string.isRequired
};

export default Tab;
