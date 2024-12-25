import { Bullet, Item, List, Section, StyledHeader } from "./styled.js";
import bullet from "../../../../assets/images/bullet.png";

// eslint-disable-next-line react/prop-types
export const Skills = ({ title, skills }) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {/* eslint-disable-next-line react/prop-types */}
      {skills.map((skill) => (
        <Item key={skill}>
          <Bullet src={bullet} alt={"blue punctor bullet"} />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);
