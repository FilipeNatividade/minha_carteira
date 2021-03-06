import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding:0;
}
html, body, #root{
    height:100% auto;
}
*, button, input {
    border:0;
    font-family: 'Roboto', sans-serif ;
    outline:none;
}
button{
    cursor: pointer;
}
`;
