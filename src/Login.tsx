import { getPopupClient } from './popupClient';

export const Login = () => {
    const client = getPopupClient();
    const onClick = async () => {
        await client.acquireTokenPopup({
            scopes: ['User.Read']
        });
        // eslint-disable-next-line no-restricted-globals
        (location as any).reload();
    }

    return <button onClick={onClick}>Login</button>;
}