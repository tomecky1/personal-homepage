import {Description, Link, Links, LinksRow, LinksValue, List, Name, Tile} from "./styled.js";


export const Repositories = ({repositories}) => (
  <List>
    {repositories.map(({id, homepage, name, description, html_url}) => (
      <Tile key={id}>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Links>
          {!!homepage && (
            <LinksRow>
              <dt>Demo:</dt>
              <LinksValue>
                <Link href={homepage} target={"_blank"} rel={"noreferrer"}>{homepage}</Link>
              </LinksValue>
            </LinksRow>)}
          <LinksRow>
            <dt>Code:</dt>
            <LinksValue>
              <Link href={html_url} target={"_blank"} rel={"noreferrer"}>{html_url}</Link>
            </LinksValue>
          </LinksRow>
        </Links>
      </Tile>
    ))}
  </List>
)