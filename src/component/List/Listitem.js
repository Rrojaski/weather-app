import styled from 'styled-components';

const Listitem = styled.li`
  max-width: 100%;
  a {
    color: #5472eb;
    display: ${(props) => (props.inline ? 'inline' : 'block')};
    margin-right: ${(props) => (props.inline ? '2rem' : 0)};
    margin-bottom: ${(props) => (props.inline ? 0 : '3rem')};
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`


export default Listitem;