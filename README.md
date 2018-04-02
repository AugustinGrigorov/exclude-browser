# react-exclude-browser
Render content conditionally based on browser and version. The package provides a wrapper that takes props of a configuration of unsupported browsers and a react component of content to render if a browser is unsupported. Everything inside the wrapper will render on supported browsers and unsupported browsers will see the provided react component for unsupported browsers.

### Example use:
```
import ExcludeBrowser from 'react-exclude-browser';
import UnsupportedBrowserView from './components/UnsupportedBrowserView'
import MainContent from './components/MainContent'
...
<ExcludeBrowser
  excludedBrowsers={[
    { name: 'safari', version: '10' },
    { name: 'chrome' },
  ]}
  unsupportedBrowserMessage={UnsupportedBrowserView}
>
  <MainContent />
</ExcludeBrowser>
```

### Implementation details
The configuration object takes the form of an array of objects containing the browser name and version. User browser information is retrieved via [detect-browser](https://github.com/DamonOehlman/detect-browser) package and version number are compared with [compare-versions](https://github.com/omichelsen/compare-versions) package.

### For development
- Clone the repo
- Run `yarn`
- Run `yarn build`
- Run `yarn link`
- Link to your project directory

### Testing
Testing is done using jest. To run tests execute `yarn test`.

### Contributing
All contributions are welcome. Please submit a PR and I'll review it. If you are adding new functionality please add tests.

[Code of Conduct](CODE_OF_CONDUCT.md)
