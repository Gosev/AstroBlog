import Swup from 'swup'
import SwupOverlayTheme from '@swup/overlay-theme';

const swup = new Swup({
  plugins: [new SwupOverlayTheme({
    color: '#2D2E82',
    duration: 600,
    direction: 'to-right',
  })]
});