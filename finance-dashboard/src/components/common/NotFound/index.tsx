import { NotFoundContainer, NotFoundTitle } from "./styled";

interface NotFoundProps {
  text: string;
}

const NotFound = ({ text }: NotFoundProps) => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>{text}</NotFoundTitle>
    </NotFoundContainer>
  );
};

export default NotFound;
