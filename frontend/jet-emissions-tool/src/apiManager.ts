export async function getAllCompanyData() {
    try {
        let res = await fetch("http://127.0.0.1:5000/all")
        return await res.json()
    } catch (error) {
        return undefined
    }
}