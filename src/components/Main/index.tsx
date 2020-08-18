import * as S from './styles'
const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS, Styled Components'
}) => (
  <S.Wraper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente a uma tela com código"
    />
  </S.Wraper>
)

export default Main
