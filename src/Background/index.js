import logo from '../Logo/logo.svg';
import { Logo } from './styled';

export const Background = () => (
  <div>
    {[...Array(6)].map((value, index) =>
    (
      <Logo src={logo} id={index} key={index} />
    ))}
  </div>
);