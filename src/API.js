

export default function API() {

    const host = "http://localhost:8000"

    async function fetchApi({url}){
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
        return await fetchApi({url:'/web/utils/get_user'})

    }

    async function logout(){
        await fetchApi({url:'/auth/logout'})
        window.location.reload();
    }

    return {
        get_user,
        logout
    }

}
