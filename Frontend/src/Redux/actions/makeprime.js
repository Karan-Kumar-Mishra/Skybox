import toast from "react-hot-toast";
export const markprime = (userdata) => {
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
        let a = await fetch(process.env.REACT_APP_BACKEND_URL + '/markprime', option);
        let res = await a.json()
        if (res.status === "ok") {
            toast.success("payment  is  successfully done !");
            dispatch({ type: 'MARKE_PRIME', payload: res.status })
        }
    };
};
