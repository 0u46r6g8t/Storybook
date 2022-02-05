import React from "react";
import PropsTypes from 'prop-types';

export function Button({ label }) {
  return <div>{label}</div>;
};

Button.propsTypes = {
  label: PropsTypes.string.isRequired
}

Button.defaultProps = {
  label: 'Default',
}