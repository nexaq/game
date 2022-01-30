

export default function getServerErrorMessage(type: string, attribute: string, message?: string) {
    if (message) {
        return message;
    }
    switch (type) {
        case 'unique violation':
            return `With same ${attribute} already exists!`;
    }

}