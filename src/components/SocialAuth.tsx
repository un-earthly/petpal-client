
const SocialSignIn = () => {
    // const dispatch = useAppDispatch();
    // const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

    
    return (
        <div className="flex items-center space-x-5">
            <button
                className="btn-accent btn w-full btn-outline"
                // onClick={()=>handleSignInWithGoogle()}
            >
                Sign in with Google
            </button>
        </div>
    );
};
export default SocialSignIn