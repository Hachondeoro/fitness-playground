import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import type { RootState } from "lib/redux/store";
import React from "react";
import { Col } from "react-bootstrap";
import S from "ui/buttons/superscript";

const Fasting = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-3 gymRoutine paddingBottom">
      <Col md="10" className="mx-auto">
        <h1>Fasting Guidelines</h1>
        Studies also show that fasting can:
        {/* prettier-ignore */}
        <div>
          <li>Reduce systemic inflammation <S n={1}/></li>
          <li>Reduce oxidative damage<S n={2}/></li>
          <li>Improve insulin sensitivity<S n={3}/></li>
          <li>Raise growth hormone levels <S n={4}/></li>
          <li>Exercising in a fasted state increases both lipolysis and fat burning rates. <S
            n={5}/></li>
          <li>Research shows that blood flow in the abdominal region is increased when you’re in a fasted state.<S
            n={6}/></li>
        </div>
        <h2>What to do while Fasting</h2>
        <p>
          The number one thing you need to remember to do is to drink a lot of water; this will help you avoid getting
          thirsty, which is often mistaken as hunger.
        </p>
        <p>
          First, in the morning start your day with a cup of coffee. Black coffee and tea are also allowed during a
          fast. You may also find diet coke or diet jelly useful. Of course, this is your personal decision.
        </p>
        <p>
          You may also find it helpful to stay busy while fasting. John Barban, Varsity Strength Coach has been
          experimenting with fasting for the last 6 months. Recently he said that, “fasting is easiest when I’m busy. I
          think if people’s lives were a little more exciting they wouldn’t need to eat so much to get some joy out of
          their day.” This statement is very true.
        </p>
        <h2>References</h2>
        <ol className="references">
          <li>
            Brad Pilon (2007)<em>Eat, Stop, Eat.</em>
          </li>
          <li>
            Aksungar, Fehime B et al. “Interleukin-6, C-reactive protein and biochemical parameters during prolonged
            intermittent fasting.” <em>Annals of nutrition & metabolism</em> vol. 51,1 (2007): 88-95.
            doi:10.1159/000100954
          </li>
          <li>
            Varady, Krista A, and Marc K Hellerstein. “Alternate-day fasting and chronic disease prevention: a review of
            human and animal trials.” <em>The American journal of clinical nutrition</em> vol. 86,1 (2007): 7-13.
            doi:10.1093/ajcn/86.1.7
          </li>
          <li>
            Harvie, M N et al. “The effects of intermittent or continuous energy restriction on weight loss and
            metabolic disease risk markers: a randomized trial in young overweight women.”{" "}
            <em>International journal of obesity (2005)</em> vol. 35,5 (2011): 714-27. doi:10.1038/ijo.2010.171
          </li>
          <li>
            Hartman, M L et al. “Augmented growth hormone (GH) secretory burst frequency and amplitude mediate enhanced
            GH secretion during a two-day fast in normal men.”{" "}
            <em>The Journal of clinical endocrinology and metabolism</em> vol. 74,4 (1992): 757-65.
            doi:10.1210/jcem.74.4.1548337
          </li>
          <li>
            Horowitz, J F et al. “Lipolytic suppression following carbohydrate ingestion limits fat oxidation during
            exercise.” <em>The American journal of physiology</em> vol. 273,4 (1997): E768-75.
            doi:10.1152/ajpendo.1997.273.4.E768
          </li>
          <li>
            Gjedsted, J et al. “Effects of a 3-day fast on regional lipid and glucose metabolism in human skeletal
            muscle and adipose tissue.” <em>Acta physiologica</em> (Oxford, England) vol. 191,3 (2007): 205-16.
            doi:10.1111/j.1748-1716.2007.01740.x
          </li>
        </ol>
      </Col>
    </div>
  );
};

export default Fasting;
