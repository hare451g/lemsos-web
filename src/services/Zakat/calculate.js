import numeral from 'numeral';

// Base counting zakat
const calculateBruteZakat = ({ totalWealth = 0, zakatPercentage = 0.025 }) =>
  parseFloat(numeral(totalWealth).value() * zakatPercentage);

// Gold Zakat
const calculateGoldValue = ({ goldSaving = 0, goldPrice = 0 }) =>
  parseFloat(numeral(goldSaving).value() * goldPrice);

const calculateTotalWealth = ({ saldo = 0, deposit = 0, goldValue = 0 }) =>
  parseFloat(
    numeral(saldo).value() +
      numeral(deposit).value() +
      numeral(goldValue).value()
  );

// Profession Zakat
const calculateNettZakat = ({
  totalIncome = 0,
  totalOutcome = 0,
  zakatPercentage = 0.025,
}) =>
  calculateBruteZakat({
    totalWealth: parseFloat(
      numeral(totalIncome).value() - numeral(totalOutcome).value()
    ),
    zakatPercentage,
  });

// Trade Zakat
const calculateTradeWealth = ({
  cash = 0,
  saving = 0,
  totalItem = 0,
  receiveable = 0,
}) =>
  numeral(cash).value() +
  numeral(saving).value() +
  numeral(totalItem).value() +
  numeral(receiveable).value();

const calculateTradeOutcome = ({ loan, payments }) =>
  numeral(loan).value() + numeral(payments).value();

export {
  calculateGoldValue,
  calculateTotalWealth,
  calculateBruteZakat,
  calculateNettZakat,
  calculateTradeWealth,
  calculateTradeOutcome,
};
