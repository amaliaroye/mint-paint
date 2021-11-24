import styled from 'styled-components'

export const Button = styled.button`
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: var(--surface);
  box-shadow: var(--border-raised-outer), var(--border-raised-inner);
  border: none;
  border-radius: 0;
  min-width: 75px;
  min-height: 23px;
  padding: 0 12px;

  color: ${(props) => (props.disabled ? 'var(--button-shadow)' : 'black')};
  text-shadow: ${(props) =>
    props.disabled ? '1px 1px 0 var(--button-highlight)' : 'none'};

  &:focus {
    outline: 1px dotted #000000;
    outline-offset: -4px;
  }

  &:active {
    box-shadow: var(--border-sunken-outer), var(--border-sunken-inner);
    padding: 2px 11px 0 13px;
  }
`
