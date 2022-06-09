import { createGlobalStyle } from 'styled-components';
import { breakPoints } from '../common';

export const GlobalStyles = createGlobalStyle`

 /* reset */
 	 *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
			box-sizing: inherit;
  }

  :root{
    --font-primary:'Inter', sans-serif;

		--color-primary: #5A4AD1;
		--color-progress: #847CC6;
		--color-progress-background:#bdc5d6;

		--color-primary-text: #40434A;
		--color-primary-text-dark: #1c2334;
		--color-primary-text-medium: #9BA0AB;
		--color-primary-text-light: #F4F6F9;


		--color-font: rgb(0,0,0);
  }

	body{
		color: var(--color-font);
		font-family: var(--font-primary);
		-webkit-font-smoothing: antialiased;
	}

   /* font size responsiveness */
  html {
		box-sizing: border-box;

		@media only screen and (max-width: ${breakPoints.bpXLarge}) {
				font-size: 62.5% !important; // 10px
		}
    
	}
	
	::selection {
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}
`;
