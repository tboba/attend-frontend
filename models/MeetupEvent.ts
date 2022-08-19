import RegisteredUser from "./RegisteredUser";

class MeetupEvent {
    readonly id: string;
    author: RegisteredUser;
    name: string;
    description?: string;
    address?: string;
    image?: string;

    constructor(_id: string, _author: RegisteredUser, _name: string) {
        this.id = _id;
        this.author = _author;
        this.name = _name;
    }
}

export default MeetupEvent;