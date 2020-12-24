/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
import produce from "immer";
import { ACTION_TYPES } from "./actions";

// type MetadataObjApi = {
//   id?: number | string, // it depends on scope is school or company && only one
//   scope?: string, // company || school
//   currentPage?: number,
//   offset?: number,
//   limit?: number,
//   total: number,
// }

// export type DataObjApi = {
//   metadata: MetadataObjApi,
//   data: any, // will overwrite specific data type
//   errors: string[] | null,
// }

// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
// type DataType = DataObjApi & { data: CoachType[] };

const initialState = {
  data: null,
  errors: null,
};

/**
 * Reducers
 */
function todosReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPES.FETCH_USER_SUCCESS: {
        const { response } = action.payload;
        const { data } = response; // ??? errors
        draft.data = data;
        break;
      }
      case ACTION_TYPES.FETCH_USER_FAILURE: {
        const { id, scope, response } = action.payload;
        const { errors } = response;
        draft.scope = scope;
        draft.error = errors;
        // draft.allIds.push(id);
        // draft.coachList[`${id}`] = { metadata, errors };
        break;
      }
      // case RESET -> TH trả lại change scope -> reset lại tất cả -> initialState
      default:
        return draft;
      }
  })
};

  export default todosReducer;

// export default produce((draft, action) => {
//   switch (action.type) {
//   case ACTION_TYPES.FETCH_USER_SUCCESS: {
//     const { response } = action.payload;
//     const { data } = response; // ??? errors
//     draft.data = data;
//     break;
//   }
//   case ACTION_TYPES.FETCH_USER_FAILURE: {
//     const { id, scope, response } = action.payload;
//     const { errors } = response;
//     draft.scope = scope;
//     draft.error = errors;
//     // draft.allIds.push(id);
//     // draft.coachList[`${id}`] = { metadata, errors };
//     break;
//   }
//   // case RESET -> TH trả lại change scope -> reset lại tất cả -> initialState
//   default:
//     return draft;
//   }
// },
// initialState);

// export default reducer;

// const byId = produce((draft, action) => {
//     switch (action.type) {
//         case RECEIVE_PRODUCTS:
//             action.products.forEach(product => {
//                 draft[product.id] = product
//             })
//     }
// }, {})

// produce((draft, action) => {
//   switch (action.type) {
//       case RECEIVE_PRODUCTS:
//           action.products.forEach(product => {
//               draft[product.id] = product
//           })
//   }
// }, {})

// export default function reducer(state: typeof initialState, { type, payload }: ActionType) {
//   switch (type) {
//   case ACTION_TYPES.FETCH_COACHES_SUCCESS: {
//     const { id, scope, metadata, data } = payload;
//     // return Object.assign({}, state, {
//     //   todos: state.todos.concat({
//     //     id: action.id,
//     //     text: action.text,
//     //     completed: false
//     //   })
//     // })
//   }
//     // return {
//     //   ...state,
//     //   character: payload.response,
//     //   isFetchedOnServer: payload.isServer,
//     //   nextUserId: state.nextUserId + 1,
//     // };
//   default:
//     return state;
//   }
// }
