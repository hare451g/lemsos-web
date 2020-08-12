import numeral from 'numeral';

const calculate = {
  countGoldNishab: (goldPrice, goldNishab) =>
    numeral(goldPrice).value() * goldNishab,

  countGoldValue: (goldSaving = 0, goldPrice = 0) =>
    numeral(goldSaving).value() * goldPrice,

  countTotalWealth: (saldo = 0, deposit = 0, goldValue = 0) =>
    numeral(saldo).value() + numeral(deposit).value() + goldValue,

  countZakatGold: (totalWealth = 0, zakatPercentage = 0.25) =>
    numeral(totalWealth).value() * zakatPercentage,
};

export default calculate;
