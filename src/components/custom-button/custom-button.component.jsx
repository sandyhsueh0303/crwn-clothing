import React from 'react';

import { CustomButtonContainer } from './custon-button.styles';

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);


export default CustomButton;