import { fbStatus } from '../constants/constans';
import {
  IFeedBack,
  TDividedFbs,
  TFbCategoryValues,
  TFbSortValues,
  TFbStatusValues,
  TDividedNums,
} from '../types';

export class FeedbackHelper {
  static filterFbByStatus(status: TFbStatusValues, feedbacks: IFeedBack[]) {
    return feedbacks.filter((fb) => fb.status === status);
  }

  static getFbCommentsLength(comments: IFeedBack['comments']) {
    let allCommentsNum = comments.length;
    comments.forEach(({ replies }) => (allCommentsNum += replies.length));
    return allCommentsNum;
  }

  static sortFbsBy(query: TFbSortValues, feedbacks: IFeedBack[]) {
    const newFbsRef = [...feedbacks];
    const sorteredFbs: IFeedBack[] = [];
    let collectionNums: number[] = [];

    if (query.includes('UPVOTES')) {
      newFbsRef.forEach(({ upvotes }) => {
        if (!collectionNums.includes(upvotes)) collectionNums.push(upvotes);
      });
    } else
      newFbsRef.forEach(({ comments }) => {
        let allCommentsNum = this.getFbCommentsLength(comments);

        if (!collectionNums.includes(allCommentsNum))
          collectionNums.push(allCommentsNum);
      });

    query.includes('MOST')
      ? (collectionNums = collectionNums.sort((a, b) => b - a))
      : (collectionNums = collectionNums.sort((a, b) => a - b));

    collectionNums.forEach((collectedNum) => {
      newFbsRef.forEach((fb) => {
        if (sorteredFbs.includes(fb)) return;
        let areTheSameNumber = null;

        if (query.includes('UPVOTES'))
          areTheSameNumber = fb.upvotes === collectedNum;
        else {
          areTheSameNumber =
            collectedNum === this.getFbCommentsLength(fb.comments);
        }

        if (areTheSameNumber) sorteredFbs.push(fb);
      });
    });

    return sorteredFbs;
  }

  static filterFbByCategory(
    category: TFbCategoryValues,
    feedbacks: IFeedBack[]
  ) {
    if (category === 'ALL') return feedbacks;
    return feedbacks.filter((fb) => fb.category === category);
  }

  static getFbById(id: string, feedbacks: IFeedBack[]) {
    return feedbacks.find((fb) => fb.id === id);
  }

  static getNumOfFbsByStatus(feedbacks: IFeedBack[]) {
    const dividedNums = {} as TDividedNums;
    fbStatus.forEach(({ value }) => (dividedNums[value] = 0));

    const { IN_PROGRESS, LIVE, PLANNED, SUGGESTION } = feedbacks.reduce(
      (acc, { status }) => {
        acc[status] += 1;
        return acc;
      },
      dividedNums
    );

    return {
      numOfPlannedFbs: PLANNED,
      numOfInProgressFbs: IN_PROGRESS,
      numOfLiveFbs: LIVE,
      numOfSuggestionFbs: SUGGESTION,
    };
  }

  static getFbsDivivedByStatus(feedbacks: IFeedBack[]) {
    const dividedFbs = {} as TDividedFbs;
    fbStatus.forEach(({ value }) => (dividedFbs[value] = []));
    const { IN_PROGRESS, LIVE, PLANNED, SUGGESTION } = feedbacks.reduce(
      (acc, fb) => {
        acc[fb.status].push(fb);
        return acc;
      },
      dividedFbs
    );
    console.log([PLANNED, IN_PROGRESS, SUGGESTION, LIVE]);
    return [PLANNED, IN_PROGRESS, LIVE, SUGGESTION];
  }
}
