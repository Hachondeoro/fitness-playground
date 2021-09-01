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
