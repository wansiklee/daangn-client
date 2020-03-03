import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        min-width: 980px;
        height: 100%;
    }
    body {
        background-color:${props => props.theme.bgColor};
        min-height: calc(100% - 77px);
        position: relative;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        text-decoration:none;
    }
`;
