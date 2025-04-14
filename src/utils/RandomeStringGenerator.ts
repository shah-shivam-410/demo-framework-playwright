type CharsetType = "alpha" | "numeric" | "alphanumeric" | "special" | "specialWithAlphaNumeric";

export function getRandomString(type: CharsetType, length: number): string {
    const charsets: { [key in CharsetType]: string } = {
        alpha: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
        alphanumeric: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        special: "!@#$%^&*()_+[]{}|;:,.<>?",
        specialWithAlphaNumeric: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"
    };
    const charset = charsets[type];
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    // console.log(result);
    return result;
}

// getRandomString("alphanumeric", 20);