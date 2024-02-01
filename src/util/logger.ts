const userAgent = navigator.userAgent;
export default {
    log: (...args: any[]) => {
        const data = {
            level: 'INFO',
            env: import.meta.env.VITE_NODE_ENV,
            data: args,
            userAgent: userAgent
        }
        window._LTracker.push(data)
    },
    error: (...args: any[]) => {
        const data = {
            level: 'ERROR',
            env: import.meta.env.VITE_NODE_ENV,
            data: args,
            userAgent: userAgent
        }
        window._LTracker.push(data)
    }
}