import React from 'react';
import { detect as detectBrowser } from 'detect-browser';
import isUnsupportedBrowser from './util/isUnsupportedBrowser';

const currentBrowser = detectBrowser();

function ExcludeBrowser(props) {
  let componentToRender;
  const UnsupportedBrowserMessage = props.unsupportedBrowserMessage;
  if (!isUnsupportedBrowser(currentBrowser, props.excludedBrowsers)) {
    componentToRender = props.children;
  } else {
    componentToRender = <UnsupportedBrowserMessage />;
  }
  return componentToRender;
}

export default ExcludeBrowser;
