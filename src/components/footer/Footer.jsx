import { Contacts } from "./Contacts";
import { SocialLinks } from "./SocialLinks";
import { FooterStyled } from "./Footer.styled";
export const Footer = () => {
  return (
    <FooterStyled>
      <Contacts />
      <SocialLinks />
    </FooterStyled>
  );
};
