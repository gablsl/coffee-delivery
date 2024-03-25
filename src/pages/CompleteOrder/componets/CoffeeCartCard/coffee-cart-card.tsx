import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput/quantity-input';
import { RegularText } from '../../../../components/Typography';
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles';

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src='https://s3-alpha-sig.figma.com/img/bc3e/4798/837b2a3ba5d0fa098e7e39985025efb7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IfBrWlJs7eEVxVt0vycAntjHlU-r9i3tnAwpZ0VZoIFvR-X1YgYEofKL~XEgZYg~eI6ceRyzyT3TEVzoF9DJ9Uzaa-W-GfrlBIQpGDLPC~ZShlOOy4TEYTA7F2pA0InSzmOBC9VDQ1TBCpYV4d9HpEmoR3C2AZe8KbFLSZW8DAzjyrWY9e8h23ebN5RposH0U-DSVEgXmDmJwGNIPLdpDQAzYRt-KYM5Td5~zZouhU6E560fuqz8uYDA93iy3KXRw-YErBNJB80DozbnHXogiBtbEeZ0abvyrl0RRIiCYaHcJRxXyFqHAtkWDGDCznpSpPyTRBfgKtVKRUC2RCPuYg__' />
        <div>
          <RegularText color='subtitle'>Mocaccino</RegularText>
          <ActionsContainer>
            <QuantityInput size='small' />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
