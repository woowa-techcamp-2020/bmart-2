import { ISearchHistory } from '../../../types/modelTypes';
import SearchHistory from '../models/SearchHistory';

const create = async (history: ISearchHistory): Promise<SearchHistory> => {
  const newUser = await SearchHistory.create(history);
  return newUser;
};

const findAll = async (userId: string): Promise<ISearchHistory[]> => {
  const histories = (await SearchHistory.findAll({
    where: {
      userId,
    },
    order: [['updatedAt', 'DESC']],
  })) as ISearchHistory[];
  const idSet = new Set();
  const removedDuplicate = histories.filter((history) => {
    if (idSet.has(history.keyword)) return false;
    idSet.add(history.keyword);
    return true;
  });
  const limit = 5;
  const limitByLength =
    removedDuplicate.length >= limit ? limit : removedDuplicate.length;

  return removedDuplicate.slice(0, limitByLength);
};

const deleteSearchHistoryById = async (id: string): Promise<number | null> => {
  const removedHistory = await SearchHistory.destroy({
    where: {
      id,
    },
  });
  return removedHistory;
};

const deleteSearchHistoryByUserID = async (
  userId: string
): Promise<number | null> => {
  const removedHistory = await SearchHistory.destroy({
    where: {
      userId,
    },
  });
  return removedHistory;
};

export default {
  create,
  findAll,
  deleteSearchHistoryById,
  deleteSearchHistoryByUserID,
};
