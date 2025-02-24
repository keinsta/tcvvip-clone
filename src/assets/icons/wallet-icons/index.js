import walletIcon from "./wallets.png";
import deposit from "./deposit.png";
import withdraw from "./withdraw.png";
import depositHistory from "./rechargeHistory.png";
import withdrawHistory from "./withdrawHistory.png";
import bet from "./bet.png";
import transaction from "./transaction.png";

export const icons = [
  { icon: walletIcon, title: "Wallet Icon" },
  { icon: deposit, title: "Deposit" },
  { icon: withdraw, title: "Withdraw" },
  { icon: depositHistory, title: "Deposit History" },
  { icon: withdrawHistory, title: "Withdraw History" },
];

export const history_icons = [
  { icon: bet, title: "Bet", subTitle: "My Betting History" },
  {
    icon: transaction,
    title: "Transaction",
    subTitle: "My Transaction History",
  },
  { icon: depositHistory, title: "Deposit", subTitle: "My Deposit History" },
  { icon: withdrawHistory, title: "Withdraw", subTitle: "My Withdraw History" },
];
