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
  sentence: string;
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
  gain: {
    [key: string]: mealInfo;
  };
  cut: {
    [key: string]: mealInfo;
  };
  maintain: {
    [key: string]: mealInfo;
  };
}