import './GamePage.scss';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import GamePageType from '../../models/iGamePage';
import { IssueList } from '../../components/IssueList/IssueList';
import { MemberCard } from '../../components/MemberCard/MemberCard';
import { MemberCardList } from '../../components/MemberCardList/MemberCardList';
import { Timer } from '../../components/Timer/Timer';
import { Statistics } from '../../components/Statistics/Statistics';
import { CardList } from '../../components/CardList/CardList';

const members = [
  { id: 13423, name: 'Alex', position: 'driver', src: 'adsasd2rr23' },
  { id: 43513325423, name: 'Kim Foon', src: 'adsasd2rr23' },
  { id: 213423, name: 'Li', position: 'driver', src: 'adsasd2rr23' },
];
const gameCards = [
  { id: 35635463, title: 'sp', value: '2' },
  { id: 990934, title: 'sp', value: '5' },
  { id: 1234090, title: 'sp', value: '1' },
];
const gameCardsStat = [
  { id: 35635463, title: 'sp', value: '2', percent: 90.5 },
  { id: 990934, title: 'sp', value: '5', percent: 7.2 },
  { id: 1234090, title: 'sp', value: '1', percent: 2.3 },
];
const issues = [
  { id: 1029341, title: 'Issue 1', priority: 'Low prority' },
  { id: 3452346, title: 'Issue 2', priority: 'High prority' },
  { id: 9000563, title: 'Issue 3', priority: 'Low prority' },
  { id: 999933, title: 'Issue 4', priority: 'Low prority' },
  { id: 409243000, title: 'Issue 5', priority: 'Low prority' },
];

export function GamePage(props: GamePageType): JSX.Element {
  const { titlePage } = props;
  return (
    <Container className="page-game">
      <Grid container>
        <Grid item xs={8}>
          <Typography className="page-game__title page-title" align="center" component="h2" variant="h2">
            {titlePage}
          </Typography>
          <Grid container alignItems="flex-end" justifyContent="space-between">
            <Grid item xs={4}>
              <MemberCard name="John" position="position" src="weokfnwoiefoi" />
            </Grid>
            <Grid item container xs={4} justifyContent="center">
              <Timer start={false} />
            </Grid>
            <Grid item container xs={4} justifyContent="center">
              <Button className="page-game__btn page-game__btn-outlined" variant="outlined">
                Stop Game
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={4}>
              <IssueList issues={issues} />
            </Grid>
            <Grid item container xs={4} justifyContent="center">
              <Button className="page-game__btn page-game__btn-primary" variant="contained" color="primary">
                Run Round
              </Button>
            </Grid>
            <Grid item container xs={4} justifyContent="center">
              <Button className="page-game__btn page-game__btn-primary" variant="contained" color="primary">
                Next ISSUE
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={4}>
              <Statistics gameCardsStat={gameCardsStat} />
            </Grid>
            <Grid item xs={6}>
              <CardList gameCards={gameCards} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} className="page-game__aside">
          <MemberCardList members={members} />
        </Grid>
      </Grid>
    </Container>
  );
}