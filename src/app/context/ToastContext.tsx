import { error } from "console";
import React, { createContext, useContext, ReactNode } from "react";
import { Toaster, toast } from "react-hot-toast";

const ToastContext = createContext<any>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const successToast = (message: string, options?: { duration?: number }) => {
    toast.success(message, options);
  };

  const errorToast = (message: string, options?: { duration?: number }) => {
    toast.error(message, options);
  };

  return (
    <ToastContext.Provider
      value={{
        successToast,
        errorToast,
      }}
    >
      <Toaster containerClassName="z-max" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
