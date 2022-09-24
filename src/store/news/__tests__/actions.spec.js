import { getNews, getNewsReq, getNewsSucc } from "../actions";

describe('getNews', () => {
    it('dispatches getNewsReq', () => {
        const mockDispatch = jest.fn();
        fetch.mockResponse(JSON.stringify([]));

        getNews()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getNewsReq());
    })

    it('dispatches getNewsSucc with fetch result', async() => {
        const data = [{ name: 'test' }];
        const mockDispatch = jest.fn();
        fetch.mockResponse(JSON.stringify(data));

        await getNews()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getNewsSucc(data));
    });
})