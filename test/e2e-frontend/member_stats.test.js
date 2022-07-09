const should = require('should');
const {memberCountRounding, getMemberStats} = require('../../core/frontend/utils/member-count.js');

describe('Front-end member stats ', function () {
    it('should return free', async function () {
        const members = await getMemberStats();
        const {free} = members;
        should.exist(free);
    });
    it('should return paid', async function () {
        const members = await getMemberStats();
        const {paid} = members;
        should.exist(paid);
    });
    it('should return comped', async function () {
        const members = await getMemberStats();
        const {comped} = members;
        should.exist(comped);
    });
});
