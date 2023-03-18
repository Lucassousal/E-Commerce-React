import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color, height, width, className }) => (
  <ReactLoading type={type} color={color} height={height} width={width} className={className} />
);

export default Loading;