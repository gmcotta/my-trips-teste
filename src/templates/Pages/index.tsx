import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia
        ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss deixa as
        pessoas mais interessantis. Casamentiss faiz malandris se pirulitá.
        Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque,
        eget.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
