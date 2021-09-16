import { RouteComponentProps } from 'react-router-dom';
import { LobbyPage } from './pages/LobbyPage/LobbyPage';
import { GamePage } from './pages/GamePage/GamePage';

interface RouteModel {
  path: string;
  exact: boolean;
  component: React.FunctionComponent;
}

export const ROUTES: RouteModel[] = [
  {
    path: '/lobby',
    exact: true,
    component: LobbyPage,
  },
  {
    path: '/game',
    exact: true,
    component: GamePage,
  },
];
