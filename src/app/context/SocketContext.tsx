
import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: any) => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketOptions = {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000
    };
    const newSocket = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000', socketOptions);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
