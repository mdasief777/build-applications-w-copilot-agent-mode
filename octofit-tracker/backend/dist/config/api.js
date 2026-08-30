const getBaseUrl = (codespaceName) => {
    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
};
export const apiBaseUrl = getBaseUrl(process.env.CODESPACE_NAME);
export const getApiBaseUrl = () => getBaseUrl(process.env.CODESPACE_NAME);
export default apiBaseUrl;
