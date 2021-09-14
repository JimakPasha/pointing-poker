import './MemberCard.scss';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { IconButton } from '@material-ui/core';
import MemberCardType from '../../models/iMemberCard';

export const MemberCard = (props: MemberCardType): JSX.Element => {
  const { src, name, position } = props;
  return (
    <div className="member-card">
      <img src={src} alt="avatar" className="member-card__image" />
      <div>
        <h3 className="member-card__title">{name}</h3>
        {position && <h4 className="member-card__position">{position}</h4>}
      </div>
      <IconButton>
        <NotInterestedIcon />
      </IconButton>
    </div>
  );
};