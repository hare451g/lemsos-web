import numeral from 'numeral';

const countTotalGoldValue = (goldSaving = 0, goldPrice = 0) =>
  parseFloat(numeral(goldSaving).value() * goldPrice);

const countTotalWealth = (
  saldo = 0,
  deposit = 0,
  goldSaving = 0,
  goldPrice = 0
) =>
  numeral(saldo).value() +
  numeral(deposit).value() +
  countTotalGoldValue(goldSaving, goldPrice);

const calculateGoldZakat = (totalWealth, zakatPercentage = 0.25) =>
  numeral(totalWealth).value() * zakatPercentage;

export { countTotalGoldValue, countTotalWealth, calculateGoldZakat };
