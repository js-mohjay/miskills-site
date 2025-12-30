export {};

declare global {
  interface Window {
    handlePaymentFromButton: (btn: HTMLButtonElement) => void;
  }
}
