import React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { Flex, FlexCol, FlexVC } from 'src/styles/styles';
import { getIcon } from 'src/styles/icons';

const Role = styled.h3`
  color: ${(props) => Color(props.theme.primaryColor).alpha(0.75).toString()};
  margin-bottom: 0;
  font-weight: 600;
`;

const Contact = ({ icon, value }: any) => (
  <FlexVC jc="flex-end" cGap="4px">
    {icon}
    <span>{value}</span>
  </FlexVC>
);

export function Intro({ intro, labels }: any) {
  return (
    <div>
      <Flex jc="space-between">
        <FlexCol rGap="5px">
          <Role>{intro.label}</Role>
        </FlexCol>
      </Flex>
      <Flex rGap="1px" cGap="10px">
        <Contact icon={getIcon('location')} value={intro.location.city} />
        <Contact icon={getIcon('email')} value={intro.email} />
        <Contact icon={getIcon('mobile')} value={intro.phone} />
      </Flex>
    </div>
  );
}
