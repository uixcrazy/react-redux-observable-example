const NAME = "_common";

const DOMAIN_NAME = `${NAME} | coach`;

/**
 * Actions
 */
export const ACTION_TYPES = {
  FETCH_USER: `[${DOMAIN_NAME}]/FETCH_USER`,
  FETCH_USER_SUCCESS: `[${DOMAIN_NAME}]/FETCH_USER_SUCCESS`,
  FETCH_USER_FAILURE: `[${DOMAIN_NAME}]/FETCH_USER_FAILURE`,
  FETCH_USER_CANCELLED: `[${DOMAIN_NAME}]/FETCH_USER_CANCELLED`,
};

/**
 * Action Creators
 */
export const fetchUserCancelled = () => ({
  type: ACTION_TYPES.FETCH_USER_CANCELLED,
});
export const fetchUser = () => ({
  type: ACTION_TYPES.FETCH_USER,
});
export const fetchUserSuccess = (response) => ({
  type: ACTION_TYPES.FETCH_USER_SUCCESS,
  payload: { response },
});
export const fetchUserFailure = (error) => ({
  type: ACTION_TYPES.FETCH_USER_FAILURE,
  payload: { error },
});

/**
 * The "ducks" pattern: https://github.com/erikras/ducks-modular-redux
 * Naming Action Types: https://redux.js.org/style-guide/style-guide#priority-c-rules-recommended
      "[Domain] Action Type"
 */
