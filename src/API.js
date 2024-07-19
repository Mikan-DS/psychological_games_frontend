

export default function API() {

    const host = "http://localhost:8000"

    async function fetchGetApi({url}){
        try {
            const response = await fetch(host+url, {
                method: 'GET',
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching:', error);
            // throw error;
            return null;
        }
    }

    async function get_user() {
        return await fetchGetApi({url:'/web/utils/get_user'})

    }

    async function logout(){
        await fetchGetApi({url:'/auth/logout'})
        window.location.reload();
    }

    async function isPhoneNew(phone) {
        let result = false;
        const response = await fetchGetApi({url: '/web/utils/checknumber/' + phone})

        if (response !== null) {
            result = response.result
        }
        return result

    }

    async function fetchPostApi({ url, data }) {
        try {
            const response = await fetch(host+url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching:', error);
            return null;
        }
    }

    async function loginInit(phone){
        return await fetchGetApi({url: '/auth/login/init/' + phone})
    }

    async function buyInit(buy_parameters) {
        return await fetchPostApi({ url: '/auth/pay/init', data: buy_parameters });
    }



    return {
        get_user,
        logout,
        isPhoneNew,
        buyInit,
        loginInit
    }
}
