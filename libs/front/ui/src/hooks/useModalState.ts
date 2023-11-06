import { useState } from 'react';

export function useModalState() {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, toggle: () => setIsOpen((old) => !old), open: () => setIsOpen(true), close: () => setIsOpen(false) };
}
