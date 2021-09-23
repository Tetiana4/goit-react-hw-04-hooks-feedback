import React from 'react';
import PropTypes from 'prop-types';
import { SectionS, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionS>
      <Title>{title}</Title>
      {children}
    </SectionS>
  );
};

export default Section;

Section.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
