import './IssueMaster.scss';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IssueCard from '../../models/iIssueCard';
import { useAppDispatch } from '../../store/hooks/hooks';

export const IssueMaster = (props: IssueCard): JSX.Element => {
  const { title, priority, id } = props;
  const dispatch = useAppDispatch();

  const handleClickDelete = () => {
    dispatch()
    socket?.emit('disconnect', id);
  }

  return (
    <div className="issue-master">
      <div className="issue-master__text">
        <h3 className="issue-master__title">{title}</h3>
        <h5 className="issue-master__priority">{priority}</h5>
      </div>
      <div>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleClickDelete}>
          <DeleteOutlineIcon className="issue-master__delete-btn" />
        </IconButton>
      </div>
    </div>
  );
};
