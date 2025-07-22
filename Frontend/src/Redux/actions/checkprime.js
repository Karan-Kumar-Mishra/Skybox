import toast from "react-hot-toast";
export const checkprime = (userdata) => {
    return async (dispatch, getState) => {
        const state = await getState();

        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: state.Data.UserData.email,
            })
        }
        let a = await fetch(process.env.REACT_APP_BACKEND_URL + '/checkprime', option);
        let res = await a.json()
        if (res.status === "ok") {
            dispatch({ type: 'CHECK_PRIME', payload: true })
        }
    };
};