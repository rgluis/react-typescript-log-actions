import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

export type Log = {
    message: string;
    date: Date;
};

interface LogsProviderProps {
    children: ReactNode;
}

export interface LogsContextType {
    logs: Log[];
    addLog: (message: string) => void;
}

export const LogsContext = createContext<LogsContextType | null>(null);

const LogsProvider = ({children}: LogsProviderProps) => {
    const [logs, setLogs] = useState<Log[]>([]);

    const addLog = (message: string) => {
        setLogs(prevState => ([
            ...prevState,
            {
                date: new Date(),
                message,
            }
        ]));
    };

    return <LogsContext.Provider value={{
        logs,
        addLog
    }}>{children}</LogsContext.Provider>;
};

export default LogsProvider;