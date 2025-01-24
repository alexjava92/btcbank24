import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            cardBackground: string;
            disabled: string;
            disabledText: string;
            subtitle: string;
            accent: string;
        };

        commonStyles: {
            gradientText: string;
        };
    }
}
