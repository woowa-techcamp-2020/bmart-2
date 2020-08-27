import React from 'react';
import { SubTitleWrapper, IconWrapper } from './SubTitle.styles';
import { SvgIconProps } from '@material-ui/core';

interface ISubTitleProps {
  icon: SvgIconProps;
  text: string;
}

const SubTitle = ({ icon, text }: ISubTitleProps) => {
  return (
    <SubTitleWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <span>{text}</span>
    </SubTitleWrapper>
  );
};
export default SubTitle;
