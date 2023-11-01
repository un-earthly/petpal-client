// redux/actions/authActions.ts
export const signIn = (provider: string) => {
    return {
        type: 'SIGN_IN',
        payload: { provider },
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    };
};
