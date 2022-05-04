import React from 'react';
import { StaticPages } from 'common';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    componentDidCatch() {

    }

    render() {
        if (this.state.hasError) {
            return <StaticPages.Maintenance />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;