import './IssueMaster.scss';
import { useState, useContext, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IssueDialog } from '../IssueDialog/IssueDialog';
import IssueCard from '../../models/iIssueCard';
import { SocketContext } from '../../socketContext';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { addIssues } from '../../store/slices/issuesSlice';

export const IssueMaster = (props: IssueCard): JSX.Element => {
  const { title, priority, id } = props;
  const [open, setOpen] = useState(false);
  const { socket } = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const room = useAppSelector((state) => state.room.room);

  useEffect(() => {
    socket?.on('issues', (issues) => {
      dispatch(addIssues(issues));
    });
  }, [socket, dispatch]);

  const handleClickDelete = () => {
    socket?.emit('deleteIssue', id, room);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="issue-master">
      <div className="issue-master__text">
        <h3 className="issue-master__title">{title}</h3>
        <h5 className="issue-master__priority">{priority}</h5>
      </div>
      <div>
        <IconButton onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleClickDelete}>
          <DeleteOutlineIcon className="issue-master__delete-btn" />
        </IconButton>
      </div>
      <IssueDialog edit id={id} open={open} onClose={handleClose} />
    </div>
  );
};
