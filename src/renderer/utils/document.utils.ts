export function getSearchParam(paramName: string): string | null {
    for (const pair of window.location.search.substring(1).split('&')) {
        const [key, value] = pair.split('=');
        if (key === paramName) {
            return value;
        }
    }
    return null;
}
