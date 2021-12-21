// import all of your reducers into this file, and export them back out. 
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

export const initialState = {
    items: [
        {
            id: '',
            item: '',
            catrgory: '',
            location: '',
        }
    ],
    isLoading: false,
    fetchError: '',
    itemError: '',
    };
    
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (ITEM_START):
            return ({
                ...state,
                items: [],
                isLoading: true,
                fetchError: '',
                itemError: '',
            });
        case (ITEM_SUCCESS):
            return ({
                ...state,
                items: action.payload,
                isLoading: false,
                fetchError: '',
                itemError: '',
            });
        case (ITEM_FAIL):
            return ({
                ...state,
                items: [],
                isLoading: false,
                fetchError: action.payload,
                itemError: '',
            });
        case (ITEM_ERROR):
            return ({
                ...state,
                items: [],
                isLoading: false,
                fetchError: '',
                itemError: action.payload,
            });
        case (ITEM_ADD):
            const newItem = {
                id: '###',
                item: action.payload,
                category: action.payload,
                location: action.payload,
            };
            return {
                ...state,
                items: [...state.items, newItem],
            };
        };
    };
    
export default reducer;