import {Item, List, Section, StyledHeader} from "./styled.js";
// eslint-disable-next-line react/prop-types
export const Skills = ({title, skills}) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {/* eslint-disable-next-line react/prop-types */}
      {skills.map(skill => (
        <Item key={skill}>

          {skill}
        </Item>
      ))}
    </List>
  </Section>
);