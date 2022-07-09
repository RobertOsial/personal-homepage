import { socials } from "./socials";
import { Link, List } from "./styled";

export const SocialIcons = () => {
  return (
    <List>
      {socials.map(({ name, url, Icon }) => (
        <li key={name}>
          <Link href={url} title={name} target="_blank" rel="noreferrer">
            <Icon />
          </Link>
        </li>
      ))}
    </List>
  );
}