import {useContext} from 'react';
import {LogsContext, LogsContextType} from "../context/Logs";

const useLogsContext = (): LogsContextType => {
    const logsContext = useContext(LogsContext);
    if (!logsContext) {
        throw new Error('You need to wrap this hook into LogsProvider');
    }
    return logsContext;
};

export default useLogsContext;