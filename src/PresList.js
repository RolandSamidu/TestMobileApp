import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import PresBack from './PresBack';

const PresList = (props) => {
  return (
    <Background>
     <PresBack/>
    </Background>
  );
};

export default PresList;