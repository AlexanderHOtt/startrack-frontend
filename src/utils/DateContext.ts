import { createContext } from 'react';

export type ContextType = {
  startDate: Date | null;
  setStartDate: (date: Date) => void;
  endDate: Date | null;
  setEndDate: (date: Date) => void;
  ip: string | null;
  setIp: (ip: string) => void;
};

export const DateContext = createContext<ContextType>({
  startDate: new Date(),
  setStartDate: () => {},
  endDate: new Date(),
  setEndDate: () => {},
  ip: '',
  setIp: () => {},
});
