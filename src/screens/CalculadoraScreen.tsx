import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './../theme/appTheme';
import Button from '../componenets/Button';
import {colors} from './../../constants/constants';
import {useCalculator} from './../hooks/useCalculator';

const CalculadoraScreen = () => {
  const {
    handleNumber,
    del,
    clean,
    changeSymbol,
    btnAdd,
    btnSubstraction,
    btnMultiply,
    btnDivide,
    calculate,
    lastNumber,
    number,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.number} numberOfLines={1} adjustsFontSizeToFit>
        {lastNumber}
      </Text>
      <Text style={styles.result}>{number}</Text>

      <View style={styles.row}>
        <Button text="C" color={colors.lightGray} action={clean} />
        <Button text="+/-" color={colors.lightGray} action={changeSymbol} />
        <Button text="del" color={colors.lightGray} action={del} />
        <Button text="/" color={colors.orange} action={btnDivide} />
      </View>
      <View style={styles.row}>
        <Button text="7" color={colors.gray} action={handleNumber} />
        <Button text="8" color={colors.gray} action={handleNumber} />
        <Button text="9" color={colors.gray} action={handleNumber} />
        <Button text="X" color={colors.orange} action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <Button text="4" color={colors.gray} action={handleNumber} />
        <Button text="5" color={colors.gray} action={handleNumber} />
        <Button text="6" color={colors.gray} action={handleNumber} />
        <Button text="-" color={colors.orange} action={btnSubstraction} />
      </View>
      <View style={styles.row}>
        <Button text="1" color={colors.gray} action={handleNumber} />
        <Button text="2" color={colors.gray} action={handleNumber} />
        <Button text="3" color={colors.gray} action={handleNumber} />
        <Button text="+" color={colors.orange} action={btnAdd} />
      </View>
      <View style={styles.row}>
        <Button
          text="0"
          color={colors.gray}
          stretch={true}
          action={handleNumber}
        />
        <Button text="." color={colors.gray} action={handleNumber} />
        <Button text="=" color={colors.orange} action={calculate} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
