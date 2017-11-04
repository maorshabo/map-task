import userService from './user.service';
import utilsModule from '../utils.module';

describe('userService', () => {

    describe('getUsers(n)', () => {
        let userServiceClass;

        beforeEach(() => {
            angular.mock.module(utilsModule);

            angular.mock.inject((_userService_) => {
                userServiceClass = _userService_;
            });
        });

        it('should exists', () => {
            expect(userServiceClass).toBeDefined();
        });
    });
});