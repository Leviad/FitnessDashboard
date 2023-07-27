// styles
import GlobalStyles from '@styles/global';
import 'react-grid-layout/css/styles.css';
import './fonts/icomoon/style.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

// components
import AppLayout from './AppLayout';
import {SnackbarProvider} from 'notistack';

// utils
import {ThemeProvider, StyleSheetManager} from 'styled-components';
import {ThemeProvider as MuiThemeProvider, createTheme} from '@mui/material/styles';
import {preventDefault} from '@utils/helpers';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

// contexts
import {SidebarContextAPI} from '@contexts/sidebarContext';

// hooks
import {useEffect} from 'react';
import {useInterfaceContext} from '@contexts/interfaceContext';
import {useDispatch} from 'react-redux';

import {lazy, Suspense} from 'react';

// actions
import {saveToLocalStorage} from '@store/features/layout';

const DashboardE = lazy(() => import('@pages/DashboardE'));

const App = () => {
    const page = document.documentElement;
    const {isDarkMode, isContrastMode, direction} = useInterfaceContext();
    const theme = createTheme({
        direction: direction,
    });
    const cacheRtl = createCache({
        key: 'css-rtl',
        stylisPlugins: [rtlPlugin],
    });

    useDispatch()(saveToLocalStorage());

    useEffect(() => {
        page.setAttribute('dir', direction);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [direction]);

    useEffect(() => {
        isContrastMode && page.classList.add('contrast');
        preventDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // <CacheProvider value={cacheRtl}>
            // <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={{theme: isDarkMode ? 'dark' : 'light'}}>
                    
                        <SidebarContextAPI>
                            <GlobalStyles/>
                            <AppLayout/>
                            
                        </SidebarContextAPI>
                    
                </ThemeProvider>
            // </MuiThemeProvider>
        // </CacheProvider>
    );
}

export default App;
