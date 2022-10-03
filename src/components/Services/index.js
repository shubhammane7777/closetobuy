import React from "react";
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Search</ServicesH2>
          <ServicesP>           
            T+2 Payment settelment and Self pickup facility to the customer
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Order</ServicesH2>
          <ServicesP>
            T+2 Payment settelment and Self pickup facility to the customere
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Enjoy</ServicesH2>
          <ServicesP>
            T+2 Payment settelment and Self pickup facility to the customer
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      
    </ServicesContainer>
  );
};

export default Services;
