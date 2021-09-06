export interface GoalCalorie {
  training: number;
  resting: number;
}

export interface GramsMeasure {
  foodGrams: number;
  proteinGrams: number;
  sentenceGrams: string;
}

export interface StandardMeasure {
  valMeasure: number;
  valMeasureBack: number;
  protein: number;
  foodportion: string;
  foodportionCalories: string;
}

export interface MealsStats {
  calsMain: any; // mistake here
  totalcalsMealBack: number;
  totalproteinMeal: number;
}

interface mealInfo {
  proportion: number;
  foods: { [key: string]: number };
}

export interface MealPlan {
  maintain: {
    [key: string]: mealInfo;
  };
  cut: {
    [key: string]: mealInfo;
  };
  gain: {
    [key: string]: mealInfo;
  };
}

export interface foodsByClass {
  [key: string]: {
    class: string;
    foodCalories: number;
    measure: string;
    measureGrams: number;
    protein: number;
    roundFactor: number;
  };
}
export interface FoodFormItems {
  // foodFormItem: () => void;
  // foodFormItem: (arg1:number) => React.ReactElement;
  foodFormItem: () => React.ReactElement;
}

export interface fc {
  dispatch: (p: object) => void;
  carbChoice: string[];
  proteinChoice: string[];
  fatChoice: string[];
}
