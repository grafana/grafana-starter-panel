# Simple React Panel
[![CircleCI](https://circleci.com/gh/grafana/simple-react-panel.svg?style=svg)](https://circleci.com/gh/grafana/simple-react-panel)
[![David Dependency Status](https://david-dm.org/grafana/simple-react-panel.svg)](https://david-dm.org/grafana/simple-react-panel)
[![David Dev Dependency Status](https://david-dm.org/grafana/simple-react-panel/dev-status.svg)](https://david-dm.org/grafana/simple-react-panel/?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/grafana/simple-react-panel/badge.svg)](https://snyk.io/test/github/grafana/simple-react-panel)
[![Maintainability](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/maintainability)](https://codeclimate.com/github/grafana/simple-react-panel/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/test_coverage)](https://codeclimate.com/github/grafana/simple-react-panel/test_coverage)

Hello world showing series in Grafana panel.

### Building this plugin

This plugin uses [@grafana/toolkit](https://www.npmjs.com/package/@grafana/toolkit) to simplify building and packaging a plugin.

Install module dependencies:

```BASH
yarn
```

Build plugin in production mode:

```BASH
yarn build
```

Build plugin in development mode:

```BASH
yarn dev
```

Build plugin in development mode, watching for changes:

```BASH
yarn dev --watch
```