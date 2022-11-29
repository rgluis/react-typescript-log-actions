import {useContext} from 'react';
import {ThemeContext, ThemeContextType} from "../context/Theme";

const useThemeContext = (): ThemeContextType => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error('You need to wrap this hook into ThemeProvider');
    }
    return themeContext;
};

export default useThemeContext;