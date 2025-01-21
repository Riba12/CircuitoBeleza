declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }

  // Declaração global para `fbq`
  var fbq: (...args: any[]) => void;
}

export {};
