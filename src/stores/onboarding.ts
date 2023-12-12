import {create} from 'zustand';
import {storeOnBoarding} from './presisting-helpers/onboarding';

type State = {
  onBoarding: boolean | null;
};

type Action = {
  setOnBoarding: (value: boolean) => void;
};

export const useOnBoardingStore = create<State & Action>(set => ({
  onBoarding: false,
  setOnBoarding: value =>
    set(state => {
      storeOnBoarding(value);
      state.onBoarding = value;
      return {onBoarding: value};
    }),
}));
