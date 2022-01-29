

export default function getServerErrorMessage(type: string, attribute: string) {
    switch (type) {
        case 'unique violation':
            return `With same ${attribute} already exists!`;
    }

}