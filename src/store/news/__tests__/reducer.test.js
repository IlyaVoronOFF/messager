import { FETCH_STATUSES } from "../../../utils/constants";
import { getNewsReq } from "../actions";
import { newsReducer } from "../reducer";

describe('news reducer', () => {
    it('sets error to null if called with request  action', () => {
        const result = newsReducer({
                data: [],
                status: FETCH_STATUSES.IDLE,
                error: 'Some error',
            },
            getNewsReq()
        );

        expect(result.error).toBeNull();
    });
})