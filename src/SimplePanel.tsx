import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/ui';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    const { options } = this.props;
    return <div>Hello: {options.text}</div>;
  }
}
