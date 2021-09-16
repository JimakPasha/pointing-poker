import './BaseModal.scss';
import { Modal } from '@material-ui/core';

interface Props {
  open: boolean;
  handleClose: () => void;
  children: JSX.Element;
}

export function BaseModal(props: Props): JSX.Element {
  const { open, handleClose, children } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">{children}</div>
    </Modal>
  );
}