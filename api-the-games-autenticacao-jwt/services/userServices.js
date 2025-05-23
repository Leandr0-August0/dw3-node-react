import User from "../models/User.js";

class userService {
    async create(name, email, password) {
        try {
            const newUser = new User({
                name,
                email,
                password,
            });
            await newUser.save();
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(email) {
        try {
            const user = await User.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new userService();
