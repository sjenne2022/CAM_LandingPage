"use client";

import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
children: ReactNode;
fallback?: ReactNode;
}

interface State {
hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
}

componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
}

render() {
    if (this.state.hasError) {
    return this.props.fallback ?? <h2>Something went wrong.</h2>;
    }
    return this.props.children;
}
}
