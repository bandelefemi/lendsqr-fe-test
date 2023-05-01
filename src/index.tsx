import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
import './style.scss'
import App from './App';
import './fonts/AvenirLTStd-Black.otf'
import { registerLicense } from '@syncfusion/ej2-base';
import reportWebVitals from './reportWebVitals';


registerLicense('Mgo+DSMBaFt+QHFqUUdrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQllhTn5Td0NjWnZYcXA=;Mgo+DSMBPh8sVXJ1S0d+WFBPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpRcUVjWHlec31SQ2Q=;ORg4AjUWIQA/Gnt2VFhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdEJjWX5YcHdcTmlY;MTg1MzY0N0AzMjMxMmUzMTJlMzQzMVlHcnBRZ0dndVk4WWxUS0RyM0U3a1pyTjJTSVZoVjhVTXBXOXFRTGlzbHM9;MTg1MzY0OEAzMjMxMmUzMTJlMzQzMW5UWlprYnBQcmxxemZtS2RHTVFOTmtIYndwSmxET3lNcm5ZTmpTSzZoWW89;NRAiBiAaIQQuGjN/V0d+XU9Ad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckdkWX9fdnRRRmZYVQ==;MTg1MzY1MEAzMjMxMmUzMTJlMzQzMUgzTGtjRTJiTm5XTDFjQnpSNmMxbTdnd3BPdkZkU3dxTmcxenNjQnZBbzQ9;MTg1MzY1MUAzMjMxMmUzMTJlMzQzMUZwOEtMRkdwN1ZZZm5OLzNKWDlrRWVZSzM0TTlBYkR2L2lXRnZOOUtzWUE9;Mgo+DSMBMAY9C3t2VFhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdEJjWX5YcHBUQGJY;MTg1MzY1M0AzMjMxMmUzMTJlMzQzMUZWZ25DY29uaXAybnpaWWJvVmdDZFBlOGRERFloS2FDZkZkeU9LaDlycDQ9;MTg1MzY1NEAzMjMxMmUzMTJlMzQzMWRrbDJ2Ny9KOENrQTVyQkZ6T29pajVoUVpocDVoMmRhN0xZQjVqYkkwNmc9;MTg1MzY1NUAzMjMxMmUzMTJlMzQzMUgzTGtjRTJiTm5XTDFjQnpSNmMxbTdnd3BPdkZkU3dxTmcxenNjQnZBbzQ9');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
