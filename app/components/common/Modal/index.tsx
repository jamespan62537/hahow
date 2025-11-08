import type { ReactElement } from "react";
import { createPortal } from "react-dom";
import useModalStore from "~/lib/stores/common/modalStore";
import { Container, Card, Title, Description, Button } from "./styles";

type PortalProps = {
  children: ReactElement;
};

const Portal = ({ children }: PortalProps) => {
  const container = document.body;
  return createPortal(children, container);
};

const Modal = () => {
  const { isOpen, title, description, closeModal } = useModalStore();

  if (!isOpen) return null;
  return (
    <Portal>
      <Container>
        <Card>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button onClick={() => closeModal()}>確定</Button>
        </Card>
      </Container>
    </Portal>
  );
};

export default Modal;
