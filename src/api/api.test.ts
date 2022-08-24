import { userAPI } from './api'

test.skip('users should be added', async () => {
     const res = await userAPI.getUsers(1, 10);
        expect(res.items).toBe(5);
})

test.skip('follow on user', async () => {
    const res = await userAPI.follow(22);
        expect(res.resultCode).toBe(1);
})