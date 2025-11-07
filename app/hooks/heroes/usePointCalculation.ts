import { useEffect, useReducer } from "react";

import type { HeroProfileType } from "~/lib/api/heroes/types";

type State = {
  profile: HeroProfileType;
  remainingPoints: number;
};

type Action =
  | { type: "DECREASE"; payload: { attribute: keyof HeroProfileType } }
  | { type: "INCREASE"; payload: { attribute: keyof HeroProfileType } }
  | { type: "RESET"; payload: { initialAttributes: HeroProfileType } };

const initState = (initialAttributes: HeroProfileType): State => ({
  profile: initialAttributes,
  remainingPoints: 0,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "DECREASE": {
      const { attribute } = action.payload;
      // return the current state if the attribute is already 0
      if (state.profile[attribute] <= 0) return state;

      return {
        profile: {
          ...state.profile,
          [attribute]: state.profile[attribute] - 1,
        },
        remainingPoints: state.remainingPoints + 1,
      };
    }
    case "INCREASE": {
      // return the current state if there are no remaining points
      if (state.remainingPoints <= 0) return state;
      const { attribute } = action.payload;

      return {
        profile: {
          ...state.profile,
          [attribute]: state.profile[attribute] + 1,
        },
        remainingPoints: state.remainingPoints - 1,
      };
    }
    case "RESET": {
      return initState(action.payload.initialAttributes);
    }

    default: {
      return state;
    }
  }
};

/**
 * @description 點數計算 hook
 * @param initialAttributes
 * @returns {
 *  profile: HeroProfileType;
 *  remainingPoints: number;
 *  onDecrease: (attribute: keyof HeroProfileType) => void;
 *  onIncrease: (attribute: keyof HeroProfileType) => void;
 * }
 */
const usePointCalculation = (initialAttributes: HeroProfileType) => {
  const [state, dispatch] = useReducer(reducer, initialAttributes, initState);

  const onDecrease = (attribute: keyof HeroProfileType) =>
    dispatch({ type: "DECREASE", payload: { attribute } });

  const onIncrease = (attribute: keyof HeroProfileType) =>
    dispatch({ type: "INCREASE", payload: { attribute } });

  useEffect(() => {
    dispatch({ type: "RESET", payload: { initialAttributes } });
  }, [initialAttributes]);

  return {
    profile: state.profile,
    remainingPoints: state.remainingPoints,
    onDecrease,
    onIncrease,
  };
};

export default usePointCalculation;
