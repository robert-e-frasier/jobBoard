


export async function login(email: string, password: string) {
    if (email === "test@test.com" && password === "password") {
        
        const user = {
            id: 1,
            email: email,
            name: "Test User"
        }

        return user;
    }

    return null; 
}