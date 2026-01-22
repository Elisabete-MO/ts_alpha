export function validateName(name: string): boolean {
  const cleanName = name.replace(/\s/g, "");
  return /^[A-Za-z\s]+$/.test(name) && cleanName.length >= 4;
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password: string): boolean {
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
}
