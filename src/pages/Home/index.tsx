import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"

import coffeeDeliveryImage from "../../assets/coffeeDelivery.svg"
import { 
  CartLogo,
  CharacteristicsContainer, 
  CoffeeDeliveryMainImage, 
  MainContainer, 
  Separator, 
  SloganContainer, 
  PackageLogo,
  TimerLogo,
  CoffeeLogo,
  ItemsWrapper,
} from "./styles"

export function Home() {
  return (
    <MainContainer>
        <Separator>
          <SloganContainer>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </SloganContainer>

          <CharacteristicsContainer>
            <ItemsWrapper>
              <CartLogo>
                <ShoppingCart size={16} weight="fill" />
              </CartLogo>
              <span>Coisa simples e segura</span>
            </ItemsWrapper>

            <ItemsWrapper>
              <PackageLogo>
                <Package size={16} weight="fill" />
              </PackageLogo>
              <span>Embalagem mantém o café intacto</span>
            </ItemsWrapper>

            <ItemsWrapper>
              <TimerLogo>
                <Timer size={16} weight="fill" />
              </TimerLogo>
              <span>Entrega rápida e rastreada</span>
            </ItemsWrapper>

            <ItemsWrapper>
              <CoffeeLogo>
                <Coffee size={16} weight="fill" />
              </CoffeeLogo>
              <span>O café chega fresquinho até você</span>
            </ItemsWrapper>
          </CharacteristicsContainer>
        </Separator>

        <CoffeeDeliveryMainImage src={coffeeDeliveryImage} alt="" />
      </MainContainer>
  )
}