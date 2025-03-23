import React from "react";
import PropTypes from 'prop-types';
import './button.css';

const CustomButton = ({
    buttonWidth,
    buttonHeight,
    buttonText
}) => {
    return (
        <button className='custom-button'>
            {buttonText}
        </button>
    );
}

CustomButton.propTypes = {
    buttonwidth: PropTypes.number.isRequired,
    buttonHeight: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired
};

export { CustomButton };