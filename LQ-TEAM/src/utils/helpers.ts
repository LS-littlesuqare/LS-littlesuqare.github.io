export function isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
}

export function generateResponse(success: boolean, message: string, data: any = null) {
    return {
        success,
        message,
        data,
    };
}

export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}