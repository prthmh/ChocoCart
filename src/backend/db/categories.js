import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Milk Chocolate",
    description:
      "This is the most popular type of chocolate and is made by adding milk powder or condensed milk to the chocolate mixture, giving it acreamy and sweet taste.",
  },
  {
    _id: uuid(),
    categoryName: "Dark Chocolate",
    description:
      " Dark Chocolate type of chocolate has a higher percentage of cocoasolids and very little or no added milk content, resulting in a rich, slightly bitter flavor.",
  },
  {
    _id: uuid(),
    categoryName: "White Chocolate",
    description:
      "While technically not a chocolate because it contains no cocoa solids, white chocolate is made with cocoa butter, sugar, and milk solids, giving it a sweet, creamy taste.",
  },
  {
    _id: uuid(),
    categoryName: "Ruby Chocolate",
    description:
      "Ruby Chocolate is a relatively new type of chocolate that is made from ruby cocoa beans and has a naturally pink color and fruity slightly tart flavor.",
  }
];
