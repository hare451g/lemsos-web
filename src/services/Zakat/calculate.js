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

export {
  calculateGoldValue,
  calculateTotalWealth,
  calculateBruteZakat,
  calculateNettZakat,
};
