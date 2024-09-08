const Member = require('../domain/Member');

class MemberService {
    static async getAllMembers() {
        const members = await Member.findAll();
        return members;
    }
}

module.exports = MemberService;
