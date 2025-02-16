import {Bullet, Item, List, Section, StyledHeader} from "./styled.js";
// @ts-ignore
import bullet from "../../../../assets/images/bullet.png";

interface SkillsProps {
    title: string;
    skills: string[];
}

// eslint-disable-next-line react/prop-types
export const Skills = ({title, skills}: SkillsProps) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {/* eslint-disable-next-line react/prop-types */}
            {skills.map((skill) => (
                <Item key={skill}>
                    <Bullet src={bullet} alt={"blue punctor bullet"}/>
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);
