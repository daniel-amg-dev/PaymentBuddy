

export class UserController {
    
    static async getAllUsers(req, res) {
        // Logic to get all users
        res.send("Get all users");
    }

    static async getUserById(req, res) {
        const { id } = req.params;
    }

    static async createUser(req, res) {
        const { name, email } = req.body;
    }   

    static async updateUser(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;
    }

    static async deleteUser(req, res) {
        const { id } = req.params;
    }
}