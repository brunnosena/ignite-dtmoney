import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashoard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionsProvider } from "./contexts/TransactionsContext";
import { ModalProvider } from "./contexts/ModalContext";

import { GlobalStyle } from "./styles/global";
Modal.setAppElement("#root");

export function App() {
  return (
    <TransactionsProvider>
      <ModalProvider>
        <GlobalStyle />

        <Header />

        <Dashboard />

        <NewTransactionModal />
      </ModalProvider>
    </TransactionsProvider>
  );
}
