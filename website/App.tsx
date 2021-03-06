import React from 'react';
import GithubCorner from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/lib/esm/github';
import Npm from '@uiw/react-shields/lib/esm/npm';
import MDEditor from '../';
import ReadmeStr from '../README.md';
import Exmaple from './Exmaple';
import ExmapleKaTeX from './ExmapleKaTeX';
import ExampleCustomToolbar from './ExampleCustomToolbar';
import Logo from './Logo';
import './App.less';

const mdStr = `<p align="center">
  <img src="https://raw.githubusercontent.com/uiwjs/react-markdown-editor/4884f29f2aad59bf7f512184ba3726d76bbd7170/website/logo.svg?sanitize=true">
</p>
${ReadmeStr.replace(/([\s\S]*)<!--dividing-->/, '')}
`;

export default function App() {
  return (
    <div className="warpper">
      <GithubCorner fixed target="__blank" zIndex={99999} href="https://github.com/uiwjs/react-md-editor" />
      <header className="header">
        <Logo />
      </header>
      <div className="badges">
        <Npm.Version scope="@uiw" packageName="react-md-editor" href="https://www.npmjs.com/package/@uiw/react-md-editor" />
        <Github user="uiwjs" repo="react-md-editor">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-md-editor" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-md-editor/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-md-editor/watchers" />
        </Github>
      </div>
      <Exmaple mdStr={mdStr} />
      <div className="page-title">Custom toolbar. <a target="__blank" href="https://github.com/uiwjs/react-md-editor/blob/99a8608b7b116526af0af9233d82a916b9b77374/website/ExampleCustomToolbar.tsx#L1-L25">Example Code</a></div>
      <ExampleCustomToolbar />
      <div className="page-title">Support Custom KaTeX Preview. <a target="__blank" href="https://github.com/uiwjs/react-md-editor/blob/99a8608b7b116526af0af9233d82a916b9b77374/website/ExmapleKaTeX.tsx#L1-L60">Example Code</a></div>
      <ExmapleKaTeX />
      <MDEditor.Markdown style={{ paddingTop: 30 }} source={ReadmeStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
    </div>
  )
}