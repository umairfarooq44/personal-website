import React from 'react';

import Container from 'components/ui/Container';
import Icon from 'components/ui/Icon';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/umairfarooq44" rel="noreferrer noopener" target="_blank">
          <Icon icon={['fab', 'github']} size="lg" />
        </Styled.Link>
        <Styled.Link href="https://twitter.com/umairfarooq44" rel="noreferrer noopener" target="_blank">
          <Icon icon={['fab', 'twitter']} size="lg" />
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/umair-farooq-70a097125/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Icon icon={['fab', 'linkedin']} size="lg" />
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
