import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput/quantity-input';
import { RegularText, TitleText } from '../../../../components/Typography';
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles';

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kkn6ziKIz6~n-pjyVf3~bucb4hNb-ZqdJm5XpHmqg3smZga~Tsk564y3YjbPtnKjqtnoKE4ZAXM0LbmBEOZy-GmR~2jmzFxDyJn~zSBlfIEqVgBg-NSmJyh3S0qN-pysLrvFPKhYw14rA5WDadqgYh4lm~pFje6-4xSKwnNWBcAjlacYqf4ZJtvjkh7eTFPPwKbPoghK~Aldv1UdL8NUY~gJe~Hdagk60jK3Q71a8Jribzj~JbP7dcBxxXPAOQ~RZE3fT1AYpMI0Tbp0BBfkqwlvlg-sYs7HtCwh7pmV8F5B8etHMVDuBsqKUxmn3JvEJSa0u00HrVlBX7yoaHCDkQ__' />

      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>

      <Name>Expresso tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
