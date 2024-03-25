import { TitleText } from '../../../../components/Typography';
import { CoffeeCartCard } from '../CoffeeCartCard/coffee-cart-card';
import { DetailsContainer, SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
