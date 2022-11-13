import {hamburgerBtn} from '../main';
import {hamburgerMenu} from '../main';
export const hamburger = () => {
  hamburgerBtn?.addEventListener('click', () => {
    document.querySelector('.p-hamburger__menu')!.classList.toggle('active');
    hamburgerMenu!.classList.toggle('active');
  });
};
