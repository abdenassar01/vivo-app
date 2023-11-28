import {create} from 'zustand';
import {storeOnBoarding} from './presisting-helpers/onboarding';

type State = {
  onBoarding: boolean | null;
};

type Action = {
  setOnBoarding: () => any;
};

export const useOnBoardingStore = create<State & Action>(set => ({
  onBoarding: false,
  setOnBoarding: () =>
    set(state => {
      storeOnBoarding(true);
      state.onBoarding = true;
      return {onBoarding: true};
    }),
}));
