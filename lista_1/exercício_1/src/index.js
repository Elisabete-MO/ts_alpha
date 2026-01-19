export function isValidEmail(email) {
    const regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email.trim());
}
const valid = "contato@example.com";
const invalid = "email-sem-arroba.com";
console.log(`Valid email (${valid}):`, isValidEmail(valid));
console.log(`Invalid email (${invalid}):`, isValidEmail(invalid));
//# sourceMappingURL=index.js.map