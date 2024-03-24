import { Intro } from './components/Intro/intro';
import { OurCoffees } from './components/OurCoffes/our-coffees';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  );
}
