import React from 'react';
import Select from 'react-select';

 
 
export const colourOptions = [
    { value: 'Sunday', label: 'Sunday', color: '#0052CC',  },
    { value: 'Monday', label: 'Monday', color: '#5243AA' },
    { value: 'Tuesday', label: 'Tuesday', color: '#FF5630',  },
    { value: 'Wednesday', label: 'Wednesday', color: '#FF8B00' },
    { value: 'Thursday', label: 'Thursday', color: '#FFC400' },
    { value: 'Friday', label: 'Friday', color: '#36B37E' },
    { value: 'Saturday', label: 'Saturday', color: '#00B8D9',},
  ];
   


class CustomiseDates extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
      defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={colourOptions}
      className="basic-multi-select"
      classNamePrefix="select" placeholder="Select Dates"
        value={selectedOption}
        onChange={this.handleChange}
      />
      
    );
  }
}
export default CustomiseDates;