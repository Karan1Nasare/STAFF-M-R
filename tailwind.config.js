/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px', // Custom breakpoint for 3xl screens
        '4xl': '1920px', // Custom breakpoint for 4xl screens
      },
      colors: {
        primary: '#F49B36',
        secondary__fill: '#0B1739',
        secondary__fill__dark: '#0A1330',
        purple: '#635BFF',
        purple__opacity: 'rgba(91, 99, 255, 0.20)',
        warning: '#F8C20A',
        warning__opacity: 'rgba(248, 194, 10, 0.20)',
        tealGreen: '#16CDC7',
        tealGreen__opacity: 'rgba(22, 205, 199, 0.20)',
        green: '#00F586',
        green__opacity: 'rgba(0, 245, 134, 0.20)',
        active: '#36C7C3',
        active__opacity: 'rgba(54, 199, 195, 0.20)',
        success: '#36C76C',
        success__opacity: 'rgba(54, 199, 108, 0.20)',
        delete: '#FF6692',
        delete__opacity: 'rgba(255, 102, 146, 0.20)',
        notification: '#E62E7B',
        danger: '#EB001B',
        danger__opacity: 'rgba(235, 0, 27, 0.20)',
        blue: '#081028',
        darkBlue: '#0B1739',
        grey__primary__light: '#98A4AE',
        grey__dark: '#19191A',
        orange__primary: '#F49B36',
        sidebar_active: '#151F36',
        dash_card1_color: '#1F40EE',
        dropdown__bg: '#0F172A',
        dropdown__border: '#343B4F',
        dropdown__placeholder: '#BDBDBD',
      },
      spacing: {
        2.5: '0.625rem',
        6.25: '1.563rem',
        80.5: '80.563rem',
        11.5: '11.5rem',
        42.6: '42.0673rem',
        7.25: '7.25rem',
        2.75: '2.775rem',
        2.6: '2.625rem',
        0.65: '0.65rem',
        6.5: '6.5rem',
        39.4: '39.375rem',
        44.1: '44rem',
        34.6: '34.688rem',
        29.6: '29.625rem',
        28.8: '28.875rem',
        20.7: '20.75rem',
      },
    },

    plugins: [],
  },
};