

import { createTheme } from '@mui/material/styles';
import { COLORS } from '@/app/styles/colors';

declare module '@mui/material/styles' {
   interface Theme {
      status: {
         danger: string;
      };
   }

   interface ThemeOptions {
      altBackground?: boolean;
      // @ts-ignore
      palette?: {
         primary?: {
            main?: string;
         };
         secondary?: {
            main?: string;
         };
         background?: {
            default?: string;
            paper?: string;
         };
      };
   }

   export interface CommonColors {
      purple: string;
      dark: string;
      green: string;
      white: string;
      red: string;
   }
}

const buttonStyles = {
   height: '56px',
   textTransform: 'initial',
   fontFamily: 'inherit',
   fontWeight: 600,
   letterSpacing: '0.4px',
   fontSize: '15px',
};

export const themeOptions: any = {
   altBackground: false,
   typography: {
      fontFamily: [],
      h2: {
         fontSize: '24px',
         color: '#393C4F',
         fontWeight: 700,
      },
      h3: {
         fontSize: '16px',
         color: '#393C4F',
         fontWeight: 700,
      },
      h4: {
         fontSize: '14px',
         color: '#393C4F',
         fontWeight: 600,
      },
      h5: {
         fontSize: '16px',
         color: '#000244',
         fontWeight: 600,
      },
      h6: {
         fontSize: '18px',
         color: '#393C4F',
         fontWeight: 300,
      },
      body1: {
         color: COLORS.GREY,
         fontWeight: 600,
         letterSpacing: 0.15,
         fontSize: '14px',
      },
      body2: {
         color: COLORS.GREY,
         fontWeight: 400,
         width: 'fit-content',
      },
      body3: {
         color: COLORS.GREY,
         fontWeight: 400,
         width: 'fit-content',
      },
      caption: {
         color: '#7E7E8F'
      }
   },
   components: {
      MuiInputBase: {
         styleOverrides: {
            input: {
               fontSize: '14px',
            },
         },
      },
      MuiButton: {
         variants: [
            {
               props: { color: 'primary', variant: 'contained' },
               style: {
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                  ...buttonStyles,
               },
            },
            {
               props: { color: 'primary', variant: 'outlined' },
               style: {
                  backgroundColor: 'transoarent',
                  color: COLORS.PRIMARY,
                  ...buttonStyles,
               },
            },
            {
               props: { color: 'primary', variant: 'text' },
               style: {
                  backgroundColor: COLORS.WHITE,
                  color: COLORS.PRIMARY,
                  ...buttonStyles,
               },
            },
         ],
      },
      MuiTab: {
         styleOverrides: {
            root: {
               fontFamily: 'inherit',
               textTransform: 'none',
            },
         },
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 620,
         md: 768,
         lg: 956,
         xl: 1536,
      },
   },
   palette: {
      success: {
         main: COLORS.SUCCESS,
      },
      error: {
         main: COLORS.ERROR,
      },
      warning: {
         main: COLORS.WARNING,
      },
      action: {
         disabledBackground: COLORS.LIGHT_PRIMARY,
         disabled: COLORS.WHITE,
      },
      primary: {
         main: COLORS.PRIMARY,
      },
      secondary: {
         main: COLORS.GREEN,
      },
      background: {
         default: COLORS.SILVER,
      },
      common: {
         dark: COLORS.DARK,
         purple: COLORS.PRIMARY,
         green: COLORS.GREEN,
         white: COLORS.WHITE,
         red: COLORS.ERROR,
      },
   },
};

export default createTheme(themeOptions);
