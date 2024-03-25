import coffeeLogo from '../../assets/coffe-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to='/'>
          <img src={coffeeLogo} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to='/completeOrder'>
            <HeaderButton variant='yellow'>
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
