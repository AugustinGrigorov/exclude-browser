import compareVersions from 'compare-versions';

function isUnsupportedBrowser(currentBrowser, excludedBrowsers) {
  return excludedBrowsers.some((excludedBrowser) => {
    const isRestrictedBrowser = excludedBrowser.name.toLowerCase() === currentBrowser.name;
    const isUnsupportedVersion = !excludedBrowser.version ||
      compareVersions(currentBrowser.version, excludedBrowser.version) === -1;
    return isRestrictedBrowser && isUnsupportedVersion;
  });
}

export default isUnsupportedBrowser;
