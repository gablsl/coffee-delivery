import { TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { CoffeeCartCard } from '../CoffeeCartCard/coffee-cart-card';
import { ConfirmationSection } from './confirmation-section';
import { DetailsContainer, SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
