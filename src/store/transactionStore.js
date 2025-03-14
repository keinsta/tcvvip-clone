import { create } from "zustand";
import axiosInstance from "../config/axiosInstance";
import useAuthStore from "./authStore";

const useTransactionStore = create((set, get) => ({
  transactions: [],

  financeDetails: {},
  bankDetails: {},
  usdtDetails: {},
  walletDetails: {},

  isLoading: false,

  // to fetch transactions
  fetchAllTransactions: async () => {
    const { userId } = useAuthStore.getState();
    if (!userId) return;

    set({ isLoading: true });

    try {
      const response = await axiosInstance.get("/transaction/history", {
        type: "All",
      });
      set({ transactions: response.data.transactions || [], isLoading: false });
      //   console.log(response.data.transactions);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      set({ transactions: [], isLoading: false });
    }
  },

  // filtered All Deposit Transactions
  depositTransactionHistory: () => {
    const { transactions } = get();
    const filterDepositTransactions = transactions.filter((transaction) =>
      transaction.type.toLowerCase().includes("deposit")
    );
    return filterDepositTransactions;
  },

  // filtered All Withdrawal Transactions
  withdrawalTransactionHistory: () => {
    const { transactions } = get();
    const filterWithdrawalTransactions = transactions.filter((transaction) =>
      transaction.type.toLowerCase().includes("withdraw")
    );
    return filterWithdrawalTransactions;
  },
  bettingTransactionHistory: async () => {},

  // get User Finance Account details
  fetchUserFinanceAccountDetails: async () => {
    const { user, userId } = useAuthStore.getState();
    if (!userId) return;

    set({ isLoading: true });

    if (user?.withdrawalMethodSet) {
      await axiosInstance
        .get("/finance/get-user-finance-details")
        .then((response) => {
          set({
            financeDetails: response.data.methodDetails || [],
            isLoading: false,
          });

          get().extractFinanceMethodDetails();
        })
        .catch((error) => {
          // console.error("Failed to fetch finance details", error);
          set({ financeDetails: {}, isLoading: false });
        });
    }
  },

  // separate all finance payment methods
  extractFinanceMethodDetails: async () => {
    const { financeDetails, bankDetails, usdtDetails, walletDetails } = get();

    set({
      bankDetails: {
        bank: financeDetails.bank || "",
        cardholderName: financeDetails.cardholderName || "",
        accountNumber: financeDetails.accountNumber || "",
        ifscCode: financeDetails.ifscCode || "",
        email: financeDetails.email || "",
        phone: financeDetails.phone || "",
        state: financeDetails.state || "",
        city: financeDetails.city || "",
        branch: financeDetails.branch || "",
      },
      usdtDetails: {
        usdtType: financeDetails.usdtType || "",
        usdtWalletAddress: financeDetails.usdtWalletAddress || "",
      },
      walletDetails: {
        walletType: financeDetails.walletType || "",
        walletAddress: financeDetails.walletAddress || "",
      },
    });

    // console.log("Finance Details:", financeDetails);
    // console.log("Bank Details", bankDetails);
    // console.log("USDT Details", usdtDetails);
    // console.log("Wallet Details", walletDetails);
  },
}));

// Auto-fetch transactions when user logs in
useAuthStore.subscribe((state) => {
  if (state.userId) {
    useTransactionStore.getState().fetchAllTransactions();
    useTransactionStore.getState().fetchUserFinanceAccountDetails();
  }
});

export default useTransactionStore;
