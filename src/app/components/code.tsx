import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface props{
    code:string
    language:string
}

export default function Code(props: props){

    return(
        <SyntaxHighlighter showLineNumbers wrapLongLines langauge="javascript" style={shadesOfPurple}>{props.code}</SyntaxHighlighter>

    )
}