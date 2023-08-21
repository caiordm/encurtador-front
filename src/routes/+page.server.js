export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const Url = {
            urlOriginal: formData.get('url')
        }



        const response = await fetch('http://localhost:8080/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Url)
        });

        const data = await response.json();
        console.log(data);
    }
}