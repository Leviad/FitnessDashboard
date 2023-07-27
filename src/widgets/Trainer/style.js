import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, flex, fonts, light, textSizes} from '@styles/vars';
import {pulse} from '@styles/keyframes';
import {rgba} from 'polished';

const gridColor = theme('theme', {
    light: rgba(colors.light_gray, .5),
    dark: rgba(colors.dark, .5)
})

export const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.absolute_red};
  margin: 24px 24px 24px;
  font-family: ${fonts.accent};

  .h1 {
    line-height: .9;
    margin-right: 8px;
    flex-grow: unset;
    font-size: 50px;
  }

  .icon {
    font-size: ${textSizes['20']};
    margin-right: 10px;
    animation: ${pulse} 3s linear infinite;
    transition: all .5s;
    will-change: transform;
  }

  .text {
    text-transform: uppercase;
    align-self: flex-end;
    margin-bottom: 2px;
    
    color: ${theme('theme', {
      light: light.text,
      dark: dark.text
    })};
  }
`

export const Main = styled.div`
  height: 100%;
  background-size: 60px 60px;
  // background-image: linear-gradient(to right, ${gridColor} 1px, transparent 1px),
  // linear-gradient(to bottom, ${gridColor} 1px, transparent 1px);
  // position: relative;
  // ${flex.col};
  justify-content: center;
  display: flex;
  margin-top: 4px;
  font-size: 120px;
  
  .titlesmall {
    font-size: 20px;
  }

  .traineeName {
    font-size: 35px;
    margin-top: 20px;
  }

  .innerpart-right {
    margin-right 0;
    flex: auto;
    margin-top:20px;
  }

  .innerpart-left {
    margin-right 0;
    margin-left 16px;
    margin-top:20px;
    flex: auto;
  }


  .icon {
    font-size: ${textSizes['20']};
    margin-right: 10px;
    color: ${colors.absolute_red};
    animation: ${pulse} 3s linear infinite;
    transition: all .5s;
    will-change: transform;
  } 
`

export const Footer = styled.div`  
  height: 100%;
  background-size: 60px 60px;
  border-top: 0px;  
`