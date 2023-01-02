import React, { ErrorInfo } from "react";
import { ErrorBoundartProps } from "./ErrorBoundary.props";

export default class ErrorBoundary extends React.Component<
  ErrorBoundartProps,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundartProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.groupCollapsed(
      `%cA Caught Error Has Been Happend in %c${this.props.name} `,
      "color:red; padding:5px;",
      "color:red; padding:5px; border:solid 1px red"
    );
    console.log("where", this.props.name);
    console.log("error", error);
    console.log("info", info);
    console.groupEnd();
    if (!this.state.hasError && this.props.unmountChildrenWhenError)
      this.setState({ hasError: true });
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return <span onClick={() => this.setState({ hasError: false })}>-</span>;
  }
}
